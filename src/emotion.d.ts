import "@emotion/react";
import { ThemeType } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {
    colors: { primary: string; black001: string; gray001: string; gray002: string };
  }
}
