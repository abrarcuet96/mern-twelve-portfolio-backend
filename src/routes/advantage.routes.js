import express from "express";
import advantageControllers from "../controllers/advantage.controller.js";
import { validateUser } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/create-advantage",
  validateUser,
  advantageControllers.createAdvantage
);
router.get("/all-advantage", validateUser, advantageControllers.allAdvantage);
router.get(
  "/single-advantage/:id",
  validateUser,
  advantageControllers.singleAdvantage
);
router.put(
  "/update-advantage/:id",
  validateUser,
  advantageControllers.updateAdvantage
);
router.delete(
  "/delete-advantage/:id",
  validateUser,
  advantageControllers.deleteAdvantage
);
