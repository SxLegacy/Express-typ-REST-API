import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry,
} from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d, id == id);
  // el metodo find puede devolver undefined ojo
  if (entry != null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      };
    });
  };

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    // id: diaries.length + 1 « esta es una forma pero dependes q previamente venga consecutivo
    id: Math.max(...diaries.map((d) => d.id)) + 1, // con esto aseguras independiente de que venga en orden
    ...newDiaryEntry,
  };
  diaries.push(newDiary);
  return newDiary;
};

//const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
