import express from "express";
import serviceControllers from "../controllers/service.controller.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

const router = express.Router();

router.post("/create-service", validateUser, serviceControllers.createService);
router.get("/all-service", validateUser, serviceControllers.allService);
router.get(
  "/single-service/:id",
  validateUser,
  serviceControllers.singleService
);
router.put(
  "/update-service/:id",
  validateUser,
  serviceControllers.updateService
);
router.delete(
  "/delete-service/:id",
  validateUser,
  serviceControllers.deleteService
);
export default router;
