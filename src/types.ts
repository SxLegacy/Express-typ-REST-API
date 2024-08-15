//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
//export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// importante d.ts indica definiciones, en el caso de crear enums que si son estructuras de js se debe eliminar la .d
export enum Weather {
  // esta estructura de datos tambien compila en runtime distinto a los types
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'Weather' | 'Visibility'>

// export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export interface NonSensitiveInfoDiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
}
export type NewDiaryEntry = Omit<DiaryEntry, "id">;
