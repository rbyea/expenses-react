const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const cors = require("cors");
// const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");
const http = require('http');

const registerMessageHandlers = require("./handlers/messageHandlers");
const registerUserHandlers = require("./handlers/userHandlers");

const app = express();
const server = http.createServer(app);


const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

// if (process.env.NODE_ENV === "production") {
//   console.log("prod");
// }

//  flrbyave
// 6LFBaCZJeBbAmzyy

const onConnection = (socket) => {
  console.log("User connected");

  const { roomId } = socket.handshake.query;
  socket.roomId = roomId;

  socket.join(roomId);

  registerMessageHandlers(io, socket);
  registerUserHandlers(io, socket);


  socket.on("disconnect", () => {
    console.log("User disconnected");
    socket.leave(roomId);
  });
};

io.on("connection", onConnection);

async function start() {
  try {
    mongoose.connection.once("open", () => {
      // initDatabase()
    });
    await mongoose.connect(config.get("mongoUri"));
    console.log(chalk.green(`MongoDB connected...`));
    server.listen(PORT, () =>
      console.log(chalk.green(`Server has been started om port ${PORT}...`))
    );
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

start();
