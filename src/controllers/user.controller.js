import bcrypt from "bcrypt";
import authConfigs from "../config/auth.config.js";
import User from "../models/user.models.js";
const userRegister = async (req, res) => {
  console.log(req);

  try {
    const { email, password } = req.body;

    console.log(email);
    const user = await User.create({ email, password });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Failed to login" });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    console.log(isMatched);

    if (!isMatched) {
      return res
        .status(404)
        .json({ success: false, message: "Failed to login" });
    } else {
      const token = authConfigs.encodeToken(user.email, user._id.toString());

      res.cookie("user-token", token);
      res.status(200).json({
        success: true,
        message: "Successfully Logged In",
        user: {
          id: user._id,
          email: user.email,
        },
        token: token,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("user-token");
    return res.status(200).json({
      success: true,
      message: "Logged out successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const userControllers = { userRegister, userLogin, userLogout };

export default userControllers;
