type Idiom = {
  id: number;
  word: string;
  meaning: string;
  chineseCharacter: string;
  level: number;
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
