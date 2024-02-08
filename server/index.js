const userRouter = require("./router/userRouter");

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const User = require("./models/User");

const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
  })
);
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));
app.get("/", (req, res) => {
  res.send({ msg: "hello from server" });
});
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
