
import * as express from "express";
import { createTeacher, deleteOneTeacher, getAllTeachers, getOneTeacher, modifyTeacher } from "../controllers/teacher";

const router = express.Router();

router.post("/", createTeacher);

router.put("/:id", modifyTeacher);

router.delete("/:id",deleteOneTeacher)

router.get("/:id", getOneTeacher);

router.get("/", getAllTeachers);

export default router;