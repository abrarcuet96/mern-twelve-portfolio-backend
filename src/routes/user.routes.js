import express from "express";
import userControllers from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", userControllers.userRegister);
router.post("/login", userControllers.userLogin);
router.post("/logout", userControllers.userLogout);

export default router;
