import express from "express";
import testimonialControllers from "../controllers/testimonial.controller.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

const router = express.Router();
router.post(
  "/create-testimonial",
  validateUser,
  testimonialControllers.createTestimonial
);
router.get(
  "/all-testimonial",
  validateUser,
  testimonialControllers.allTestimonial
);
router.get(
  "/single-testimonial/:id",
  validateUser,
  testimonialControllers.singleTestimonial
);
router.put(
  "/update-testimonial/:id",
  validateUser,
  testimonialControllers.updateTestimonial
);
router.delete(
  "/delete-testimonial/:id",
  validateUser,
  testimonialControllers.deleteTestimonial
);
export default router;
