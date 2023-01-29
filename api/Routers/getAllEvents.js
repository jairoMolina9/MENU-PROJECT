const express = require("express");
const router = express.Router();

const Event = require("../Models/Event")

router.get("/", async function(req, res){

    const result = await Event.getAllEventsInfo();
    console.log("getAllEvents successfully called");

    res.send({apiData: result});
    
});

module.exports = router;