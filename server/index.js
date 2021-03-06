const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = http.createServer(app);

//routes
const signup = require("./routes/authentication");
const login = require("./routes/authentication");
const adminFunc = require("./routes/AdminFunc");
const profile = require("./routes/Profile");
const flightDetails = require("./routes/FlightDetails");
const bookFlight = require("./routes/BookFlight");
const cancelFlight = require("./routes/BookFlight");
const flightId = require("./routes/FlightDetails");
const addPayment = require("./routes/Payment");
const userBookings = require("./routes/UserBookings");

require('dotenv').config()

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    })
);
//app.use(router);

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello")
})

const port = process.env.port || 3001;

server.listen(port, ()=>{
    console.log(`Listening on Port: ${port}`);
});

app.use("/api",signup);
app.use("/api",login);
app.use("/api",adminFunc);
app.use("/api",profile);
app.use("/api",flightDetails);
app.use("/api",bookFlight);
app.use("/api",cancelFlight);
app.use("/api",flightId);
app.use("/api",addPayment);
app.use("/api",userBookings);