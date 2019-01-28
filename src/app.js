const express = require("express");
const DialogFlow = require("./dialog-flow");

const app = express();

app.get("/", (req, res) => {
  const dialogFlow = new DialogFlow();

  dialogFlow.handle(req, res);

  res.end({
    status: "ok"
  });
});

app.listen(process.env.PORT, () => console.log("Listening..."));
