import RegistrationModel from "../models/RegistionModel.js"

export const Registration = async (req, res) => {
  const { id } = req.headers
  const { event_id } = req.params
  const { date } = req.body

  const registration = await RegistrationModel.create({
    user: id,
    event: event_id,
    date: date,
  })

  await registration
    .populate("event")

    .populate("user", "-password")
    .execPopulate()

  return res.json(registration)
}

// export const = async (req, res) => {
//   const {  } = req.params

//   try {
//     const registrationget = await
//     return res.json(registrationget)
//   } catch (error) {
//     return res.status(400).json({ message: " Registration not found" })
//   }
// }

export const getRegistration = async (req, res) => {
  const { registration_id } = req.params
  try {
    const registrations = await Registration.findById(registration_id)

    if (registrations) {
      return res.json(registrations)
    }
  } catch (error) {
    return res.status(400).json({ message: " Registration not found" })
  }
}
