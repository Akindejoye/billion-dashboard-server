import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.findById({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
