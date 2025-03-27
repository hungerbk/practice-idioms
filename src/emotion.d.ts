import "@emotion/react";
import { ThemeType } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {
    colors: { primary: string; black001: string; gray001: string; gray002: string };
  }
}

/* 
NOTE:
declare module "@emotion/react" {
  export interface Theme {}
}

Emotion의 타입 시스템은 내부적으로 위처럼 정의돼 있음

따라서 우리가 만든 ThemeType으로 Emotion 내부의 Theme을 보강(Declaration Merging) 하려면 interface 확장만 가능.
type으로 재정의하거나 Theme = ThemeType으로 하면 병합이 아니라 오버라이드라서 제대로 동작하지 않거나, 타입 에러가 발생할 수 있음.
 */
