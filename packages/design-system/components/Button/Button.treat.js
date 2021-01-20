import { styleMap } from "treat";

export const button = styleMap((theme) => ({
  base: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif",
    fontSize: "3em",
    fontWeight: "800",
    height: "4em",
    width: "100%",
    padding: "0.5em 1em",
    borderRadius: "0.25em",
    display: "table-cell",
    verticalAlign: "middle",
    letterSpacing: "-2px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: '.2em 0'
  },
  primary: {
    background: `linear-gradient(70deg, ${theme.blue}  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, ${theme.red} 60%, ${theme.green} 60%)`,
    color: theme.font,
    border: "none",
  },
  secondary: {
    background: `linear-gradient(70deg, ${theme.yellow}  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, ${theme.gold} 60%, ${theme.yellow} 60%)`,
    color: theme.font,
    border: "none",
  },
}));
