const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.json({ message: "Success" });
});

app.listen(3000,);
