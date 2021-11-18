import blue from "./blue";
import green from "./green";
const mix = {
  green,
  blue,
};
export default mix;

type Tcolors = {
  [key: string]: string;
  primary: string;
  secondary: string;
  accent: string;
};
export type Tcolor = {
  [key: string]: Tcolors;
  light: Tcolors;
  dark: Tcolors;
};
export type Tmix = {
  [key: string]: Tcolor;
  green: Tcolor;
  blue: Tcolor;
};
