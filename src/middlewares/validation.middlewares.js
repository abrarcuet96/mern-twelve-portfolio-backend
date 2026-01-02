import authConfigs from "../config/auth.config.js";

export const validateUser = (req, res, next) => {
  const token = req.cookies["user-token"];
  const decoded = authConfigs.decodeToken(token);
  console.log(decoded);

  if (decoded === null) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  } else {
    req.headers.email = decoded["email"];
    req.headers._id = decoded["id"];
    next();
  }
};
