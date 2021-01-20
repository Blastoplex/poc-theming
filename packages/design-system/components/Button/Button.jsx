import React from "react";
import { useStyles } from "react-treat";
import * as styleRefs from "./Button.treat";

export default ({ children, type="primary", ...rest }) => {
  let styles;
  styles = useStyles(styleRefs);

  return <button className={styles.button[type]} {...rest}>{children}</button>;
};
