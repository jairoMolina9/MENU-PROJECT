const express = require("express");
const router = express.Router();

const Event = require("../Models/Event")

router.get("/", async function(req, res){
    
    const result = await Event.getAllVendorsFromEvent(req.query.eventid);
    console.log("getAllVendorsFromEvent successfully called");

    res.send({apiData: result});
    
});

module.exports = router;