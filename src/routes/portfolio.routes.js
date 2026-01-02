import express from "express";
import upload from "../configs/multer.config.js";
import portfolioControllers from "../controllers/portfolio.controller.js";

const router = express.Router();
router.post(
  "/create-portfolio",
  validateUser,
  upload.single("img"),
  portfolioControllers.createPortfolio
);
router.get("/all-portfolio", validateUser, portfolioControllers.allPortfolio);
router.get(
  "/single-portfolio/:id",
  validateUser,
  portfolioControllers.singlePortfolio
);
router.put(
  "/update-portfolio/:id",
  validateUser,
  upload.single("img"),
  portfolioControllers.updatePortfolio
);
router.delete(
  "/delete-portfolio/:id",
  validateUser,
  portfolioControllers.deletePortfolio
);
