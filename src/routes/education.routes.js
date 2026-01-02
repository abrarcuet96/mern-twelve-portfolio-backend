import express from "express";
import educationControllers from "../controllers/education.controller.js";
import { validateUser } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.get("/all-education", validateUser, educationControllers.allEducation);
router.get(
  "/single-education/:id",
  validateUser,
  educationControllers.singleEducation
);
router.put(
  "/update-education/:id",
  validateUser,
  educationControllers.updateEducation
);
router.delete(
  "/delete-education/:id",
  validateUser,
  educationControllers.deleteEducation
);
