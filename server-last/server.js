const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let app = express();
let port = 7000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const mongoURI = 'mongodb://localhost:27017/mevnloginreg';

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

let Users = require("./routes/Users");
let Address = require("./routes/Address");
let Pickup = require("./routes/Pickup");

app.use("/users", Users);
app.use("/address", Address);
app.use("/pickup", Pickup);

app.listen(port, function () {
    console.log("Server is running on port : " + port)
});
