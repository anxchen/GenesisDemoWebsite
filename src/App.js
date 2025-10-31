/*

import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
        <Footer theme={chosenTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
*/

// App.js
import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/footer/useDarkMode";
import { blueTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Footer from "./components/footer/Footer";
import { HashRouter } from "react-router-dom";
import lightFavicon from "./assests/images/BlueLight_GenesisLogo.png";
import darkFavicon from "./assests/images/BlueDark_GenesisLogo.png";

function App() {
  console.log("starting");
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? blueTheme : darkTheme;
  console.log(themeMode);

  useEffect(() => {
    const nextFavicon = theme === "light" ? lightFavicon : darkFavicon;
    const faviconLinks = document.querySelectorAll(
      "link[rel='icon'], link[rel='shortcut icon']"
    );

    if (faviconLinks.length > 0) {
      faviconLinks.forEach((link) => {
        if (link.getAttribute("href") !== nextFavicon) {
          link.setAttribute("href", nextFavicon);
        }
        if (!link.getAttribute("type")) {
          link.setAttribute("type", "image/png");
        }
      });
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/png";
      newFavicon.href = nextFavicon;
      document.head.appendChild(newFavicon);
    }
  }, [theme]);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <HashRouter basename="/">
        <>
          <GlobalStyles />
          <div>
            <Main theme={themeMode} />
          </div>
          <Footer
            theme={themeMode}
            themeName={theme}
            toggleTheme={toggleTheme}
          />
        </>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
