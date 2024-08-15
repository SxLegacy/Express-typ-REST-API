import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  // params siempre vienen como string requiere transformacion + aria operator

  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  // hago validacion a los datos que se reciben para que no sean any
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    //const { date, weather, visibility, comment } = req.body
    //res.send('Saving a diary')
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(addedDiaryEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

export default router;
