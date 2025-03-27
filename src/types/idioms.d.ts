type Idiom = {
  id: number;
  word: string;
  meaning: string;
  x: number;
  y: number;
};

type GameState = {
  idioms: Idiom[];
  currentMeaning: string;
  input: string;
  life: number;
  successList: Idiom[];
  failList: Idiom[];
};
