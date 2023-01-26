const db = require('./mongoUtil');
var mongoose = require('mongoose');

const express = require("express");

const router = express.Router();

router.get("/", async function(req, res){
    var id = mongoose.Types.ObjectId(req.query.eventid);
    const eventdata = await db.get().collection('Events').find({_id: id}).toArray();

    res.send({eventData: eventdata});
});

module.exports = router;