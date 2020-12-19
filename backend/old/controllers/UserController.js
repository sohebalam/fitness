import bcrypt from "bcrypt"
import User from "../models/User.js"

export const createUser = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body
    const existentUser = await User.findOne({ email })

    if (!existentUser) {
      const hashPassword = await bcrypt.hash(password, 10)
      const user = await User.create({
        email,
        firstName,
        lastName,
        password: hashPassword,
      })
      return res.json(user)
    }
    return res.status(400).json({
      message: "email already exist!  do you want to login instead? ",
    })
  } catch (err) {
    throw Error(`Error while Registering new user :  ${err}`)
  }
}

export const getUserById = async (req, res) => {
  const { userId } = req.params

  try {
    const user = await User.findById(userId)
    return res.json(user)
  } catch (error) {
    return res.status(400).json({
      message: "User ID does not exist, do you want to register instead?",
    })
  }
}
