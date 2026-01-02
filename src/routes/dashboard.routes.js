import express from "express";
import dashboard from "../controllers/dashboard.controller.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

const router = express.Router();

router.get("/dashboard-data", validateUser, dashboard);

export default router;
