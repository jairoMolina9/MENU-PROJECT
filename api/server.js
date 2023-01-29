const express = require("express")
const cors = require('cors')

const db = require('./mongoConfig');
const app = express()

const getEventRouter = require("./Routers/getEvent");
const getAllEventsRouter = require("./Routers/getAllEvents");

db.connect();

app.use(cors());

app.use("/getEvent", getEventRouter);
app.use("/getAllEvents", getAllEventsRouter);

app.get("/", (req, res) => {
  res.send("API ON 3002")
})

app.listen(3002, () => {
  console.log("API ON 3002")
})
