// node dependencies
const express = require("express");
const router = express.Router();

// app controllers
const CashMachineController = require("../controllers/CashMachineController.js");

/*
 * The endPoint used to replenishments the cash Machine
 */
router.post("/api/v1/cashs/replenishments", (request, response) =>{
    let cashMachineController = new CashMachineController();
    response.json(cashMachineController.doReplenishment(request));
});

/*
* The endPoint used to retrieve how many notes is needed from a cash quantity 
 */
router.get("/api/v1/cashs/quantity/:quantity", (request, response) =>{
    let cashMachineController = new CashMachineController();
    response.json(cashMachineController.retrieveNotes(request));
});

module.exports= router;
