import * as profilCtrl from "../controllers/profil";
import * as express from "express";

const router = express.Router();

router.post("/", profilCtrl.createProfil);

router.put("/:id", profilCtrl.modifyProfil);

router.delete("/:id",profilCtrl.deleteOneProfil)

router.get("/:id", profilCtrl.getOneProfil);

router.get("/", profilCtrl.getAllProfils);

export default router;
