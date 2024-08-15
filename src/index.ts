import express from "express";

import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json()); // middleware transforma req.body a json

const PORT = 3000;

app.get("/Envio", (_req, res) => {
  console.log("Se esta recibiendo Informacion");
  res.send("Recibiendo");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
