import express from "express";
import TyresCtrl from "./tyres.controller.js";


const router = express.Router()

router.route("/").get(TyresCtrl.apiGetTyres)

export default router