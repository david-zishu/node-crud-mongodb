const express = require("express");
const { connectMongoDb } = require("./connection");

const { logRequestResponse } = require("./middlewares");
const userRouter = require("./routes/user");

// const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logRequestResponse("log.txt"));

// Routes
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
