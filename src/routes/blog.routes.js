import express from "express";
import blogControllers from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create-blog", blogControllers.createBlog);
router.get("/all-blogs", blogControllers.allBlog);
router.get("/:id", blogControllers.singleBlog);
router.put("/:id", blogControllers.updateBlog);
router.delete("/:id", blogControllers.deleteBlog);

export default router;
