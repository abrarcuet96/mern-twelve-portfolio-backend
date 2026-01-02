import express from "express";
import commentControllers from "../controllers/comment.controller.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

const router = express.Router();
router.post("/create-comment", validateUser, commentControllers.createComment);
router.get("/all-comment", validateUser, commentControllers.allComment);
router.get(
  "/single-comment/:id",
  validateUser,
  commentControllers.singleComment
);
router.put(
  "/update-comment/:id",
  validateUser,
  commentControllers.updateComment
);
router.delete(
  "/delete-comment/:id",

  commentControllers.deleteComment
);
export default router;
