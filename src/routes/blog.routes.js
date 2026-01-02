import express from "express";
import upload from "../config/multer.config.js";
import blogControllers from "../controllers/blog.controller.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

const router = express.Router();

router.post(
  "/create-blog",
  validateUser,
  upload.single("img"),
  blogControllers.createBlog
);
router.get("/all-blogs", validateUser, blogControllers.allBlog);
router.get("/:id", validateUser, blogControllers.singleBlog);
router.put("/:id", validateUser, blogControllers.updateBlog);
router.delete("/:id", validateUser, blogControllers.deleteBlog);

export default router;
