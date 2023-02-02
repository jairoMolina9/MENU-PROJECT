const express = require("express");
const router = express.Router();

const Event = require("../Models/Event")

router.get("/", async function(req, res){
    
    const result = await Event.getMenuFromVendor(req.query.eventid,req.query.vendorid);
    console.log("getMenuFromVendor successfully called");

    res.send({apiData: result});
    
});

module.exports = router;