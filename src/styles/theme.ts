export const theme = {
  colors: {
    primary: "#ffe4c4",
    black001: "#333",
    gray001: "#ccc",
    gray002: "#a9a9a9",
  },
} as const; //NOTE: as const를 붙여야 colors.primary 같은 속성들이 리터럴 타입으로 고정돼서 타입 안정성과 자동완성에 유리

export type ThemeType = typeof theme;
