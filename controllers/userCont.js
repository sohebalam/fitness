import User from "../models/UserModel.js"

import bcrypt from "bcryptjs"

export const register = async (req, res) => {
  try {
    const { firstName, lastName, password, email } = req.body
    const userExits = await User.findOne({ email })

    if (!userExits) {
      var salt = bcrypt.genSaltSync(10)
      var hashedPassword = bcrypt.hashSync("password", salt)

      const user = await User.create({
        firstName,
        lastName,
        password: hashedPassword,
        email,
      })
      return res.json(user)
    }
    return res.status(400).json({
      message: "User Exits! Please login!",
    })
  } catch (error) {
    throw Error(`Error while registering ${error}`)
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
    return res.json(user)
  } catch (error) {
    return res.status(400).json({
      message: "User not found, Please Register!",
    })
  }
}
