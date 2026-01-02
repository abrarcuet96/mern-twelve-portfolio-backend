import fileControllers from "../controllers/file.controller.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

router.post(
  "/uploads",
  validateUser,
  upload.single("filename"),
  fileControllers.fileUpload
);
