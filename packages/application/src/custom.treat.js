import { style } from "treat";
import { paletteAzure } from 'design-tokens'


export const a = style((theme) => ({
  color: theme.font,
  backgroundColor: paletteAzure,
  padding: '10px 20px'
}));

