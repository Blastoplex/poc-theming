import { createTheme } from "treat";
import {
  paletteAzureLight,
  paletteBerryLight,
  paletteGolfLight,
  palettePineappleLight,
  paletteCrown,
  paletteWhite,
} from "design-tokens";

export const lightTheme = createTheme({
  blue: paletteAzureLight,
  red: paletteBerryLight,
  green: paletteGolfLight,
  yellow: palettePineappleLight,
  gold: paletteCrown,
  font: paletteWhite,
});
