import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(200).json({ message: "Required field missing" })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(200).json({ message: "Please register" })
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      const userResponse = {
        _id: user.id,
        email: user.email,
        lastName: user.lastName,
        firstName: user.firstName,
      }
      return res.json(userResponse)
    } else {
      return res.status(200).json({ message: " Email or Password not found " })
    }
  } catch (error) {
    throw Error(`Error while authenticating user ${error}`)
  }
}
