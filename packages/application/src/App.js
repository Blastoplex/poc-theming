import React from "react";
import {useStyles} from "react-treat";
import { ThemeProvider, Button, darkTheme, lightTheme } from "design-system";
import * as customRefs from "./custom.treat";

const CustomComponent = () => {
  let styles;
  styles = useStyles(customRefs);
  return <a className={styles.a}>I'm a custom link component that references the theme for a font color and design tokens for a bg colo</a>
}

function App() {
  const [theme, setTheme] = React.useState(darkTheme);

  const clickHandler = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }
  return (
      <div>
        <p >
          <ThemeProvider theme={theme}>
            <Button onClick={clickHandler}>Test</Button>
            <Button type='secondary' onClick={clickHandler}>Test</Button>
            <CustomComponent />
          </ThemeProvider>
        </p>
      </div>
  );
}

export default App;
