const express = require("express");
const { exec } = require("child_process");
const app = express();

app.get("/posts", (req, res) => {
  res.send("we are on home");
  print();
});

app.get("/fuck", (req, res) => {
  res.send("we are on home");
});

app.listen(process.env.PORT || 3005);

function print() {
  exec("mkdir fuck", (error, data, getter) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    if (getter) {
      console.log("data", data);
      return;
    }
    console.log("data", data);
  });
}
