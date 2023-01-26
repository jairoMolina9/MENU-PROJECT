const express = require("express")
const cors = require('cors')

const db = require('./mongoUtil');

const app = express()
// const getNameRouter = require("./getNameEndpoint");
// const getAllResRouter = require("./getAllRes");

const getEventRouter = require("./getEvent");


db.connect();

app.use(cors());


// app.use("/getAllRes", getAllResRouter);
// app.use("/getName", getNameRouter);

app.use("/", getEventRouter);


app.listen(3002, () => {
  console.log("app listening on port 3002")
})
