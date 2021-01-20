import { styleMap } from "treat";

export const button = styleMap((theme) => ({primary:{
  background: `linear-gradient(70deg, ${theme.blue}  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, ${theme.red} 60%, ${theme.green} 60%)`,
  color: theme.font,
  border:'none',
  padding: '20px 50px',
}, secondary:{
  background: `linear-gradient(70deg, ${theme.yellow}  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, ${theme.gold} 60%, ${theme.yellow} 60%)`,
  color: theme.font,
  border:'none',
  padding: '20px 50px',
}}))
