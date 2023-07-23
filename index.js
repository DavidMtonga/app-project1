const express = require("express");
const app = express();
const path = require("path");
const collection = require("./mongodb");
const html = require("html");
const sharedPath = path.join(__dirname, "../shared");

app.use(express.json());
app.set("view engine");
app.set("views", sharedPath);
app.use(express.urlencoded({ extended: false }));

app.get("../Pages/Signup", (req, res) => {
  res.render("Signup");
});

app.post("../Pages/Signup", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  await collection.insertMany([data]);

  res.render("Dashboard");
});

app.listen(5175, () => {
  console.log("port connected");
});
