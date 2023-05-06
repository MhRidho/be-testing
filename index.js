// Config env
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// middleware for send form
app.use(express.urlencoded({ extended: false }));

// If user access root backend
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Backend is running",
  });
});

app.post("/", (req, res) => {
  console.log(req.query);
  if (req.body.email === "ridho" && req.body.password === "123") {
    return res.json({
      success: true,
      message: "Login Success",
    });
  } else {
    return res.json({
      status: false,
      message: "Login Failed",
    });
  }
});

// Go to routes
app.use("/", require("./src/routes"));

// If user access url not found
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

// The first port in BE
app.listen(4000, () => {
  console.log("Port running in 4000");
});
