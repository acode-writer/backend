import * as studentCtrl from "../controllers/student";
import * as express from "express";

const router = express.Router();

router.post("/", studentCtrl.createStudent);

router.put("/:id", studentCtrl.modifyStudent);

router.delete("/:id",studentCtrl.deleteOneStudent)

router.get("/:id", studentCtrl.getOneStudent);

router.get("/", studentCtrl.getAllStudents);

export default router;