import express from "express";
import TyresCtrl from "./tyres.controller.js"; // file used for routing



const router = express.Router() 

router.route("/").get(TyresCtrl.apiGetTyres)  // "/" root url gets ALL
router.route("/brands").get(TyresCtrl.apiGetTyreBrands)  // everything queried after root you want to break it down into (filter)
router.route("/titles").get(TyresCtrl.apiGetTyreTitles)
router.route("/sizes").get(TyresCtrl.apiGetTyreSizes)
// returns lists of all filters to populate dropdown menus
export default router

// tested with 'nodemon server'