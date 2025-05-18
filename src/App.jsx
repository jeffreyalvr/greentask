import { useEffect } from "react";

import "./styles/global.css";

import Routes from "./routes";

import useThemeStore from "./store/useThemeStore";

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const html = document.documentElement;

    const applyTheme = () => {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const activeTheme = theme === "system" ? systemTheme : theme;

      html.setAttribute("data-theme", activeTheme);
    };

    applyTheme();

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") applyTheme;
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  return <Routes />;
};

export default App;
