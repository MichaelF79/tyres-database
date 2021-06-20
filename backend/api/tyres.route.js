import express from "express";
import TyresCtrl from "./tyres.controller.js";


const router = express.Router()

router.route("/").get(TyresCtrl.apiGetTyres)
router.route("/brands").get(TyresCtrl.apiGetTyreBrands)
router.route("/titles").get(TyresCtrl.apiGetTyreTitles)
router.route("/sizes").get(TyresCtrl.apiGetTyreSizes)

export default router