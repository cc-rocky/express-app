const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
