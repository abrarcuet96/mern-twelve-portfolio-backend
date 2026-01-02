import express from "express";
import experienceControllers from "../controllers/experience.controller.js";
import { validateUser } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/create-experience",
  validateUser,
  experienceControllers.createExperience
);
router.get(
  "/all-experience",
  validateUser,
  experienceControllers.allExperience
);
router.get(
  "/single-experience/:id",
  validateUser,
  experienceControllers.singleExperience
);
router.put(
  "/update-experience/:id",
  validateUser,
  experienceControllers.updateExperience
);
router.delete(
  "/delete-experience/:id",
  validateUser,
  experienceControllers.deleteExperience
);
