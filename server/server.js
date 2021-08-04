require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
// const seed = require("./seed");
const http = require("http");
const socketio = require("socket.io");
const app = express();

const server = http.createServer(app);

// port
const port = process.env.PORT || 8000;

//socket
const io = socketio(server).sockets;

// db
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    // seed()
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(`DB connection error - ${err}`));

// middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(cors());
require("./middlewares/socket")(io);

// routes middleware
fs.readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
);

app.listen(port, () => console.log(`Running server on PORT ${port}`));
