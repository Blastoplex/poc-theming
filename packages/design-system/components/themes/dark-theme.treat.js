import { createTheme } from "treat";
import {
  paletteAzure,
  paletteBerry,
  paletteGolf,
  palettePineapple,
  paletteCrown,
  paletteBlack,
} from "design-tokens";

export const darkTheme = createTheme({
  blue: paletteAzure,
  red: paletteBerry,
  green: paletteGolf,
  yellow: palettePineapple,
  gold: paletteCrown,
  font: paletteBlack,
});
