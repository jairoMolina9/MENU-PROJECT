const express = require("express")
const cors = require('cors')

const db = require('./mongoUtil');

//const mongoose = require("mongoose");


// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }

// mongoose.connect(url)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })

const app = express()
const getNameRouter = require("./getNameEndpoint");

db.connect();

app.use(cors());
app.use("/getName", getNameRouter);
app.get("/", (req, res) => {
    res.send({data:"get from /"});
});


app.listen(3002, () => {
  console.log("app listening on port 3002")
})
