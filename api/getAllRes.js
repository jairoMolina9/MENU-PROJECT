const db = require('./mongoUtil');
const express = require("express");
const router = express.Router();

router.get("/", async function(req, res){
    
    const ress2 = await db.get().collection('restaurants').find().toArray();

    const example = ress2.map((object) => object.name);

    res.send({message: example});
});

// async function getName() {
//     const response = await db.get().collection('restaurants').find({}).toArray();
//     console.log(response);
// }

module.exports = router;