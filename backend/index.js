const express = require("express");
const { createInitialTable } = require("./controllers/createInitialTable");
const app = express();
const { db } = require("./database/config");

const studentRouter = require("./routers/student");
const studentRouter2 = require("./routers/student2");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.listen(3001, () => {
  db.connect(function (err) {
    if (err) {
      return console.error("[-] error: " + err.message);
    }
    console.log("[+] Connected to the MySQL server.");
    createInitialTable();

    app.use("/student", studentRouter);
    app.use("/student2", studentRouter2);
  });
  console.log("[+] Server listening");
});
