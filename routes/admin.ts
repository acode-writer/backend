import * as adminCtrl from './../controllers/admin';
import * as express from "express";

const router = express.Router();

router.post("/", adminCtrl.createAdmin);

router.put("/:id", adminCtrl.modifyAdmin);

router.delete("/:id",adminCtrl.deleteOneAdmin)

router.get("/:id", adminCtrl.getOneAdmin);

router.get("/", adminCtrl.getAllAdmins);

export default router;

