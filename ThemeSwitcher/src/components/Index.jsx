import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const Index = () => {
  const [theme, setTheme] = useLocalStorage("themeToggle", "dark");

  const handleToggleTheme = () => {
    // event.preventDefault()
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
        <p id="paragraph">
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library[5][6] that aims to make building user
          interfaces based on components more "seamless".[5] It is maintained by
          Meta (formerly Facebook) and a community of individual developers and
          companies.[7][8][9] React can be used to develop single-page, mobile,
          or server-rendered applications with frameworks like Next.js and
          Remix[a]. Because React is only concerned with the user and rendering
          components to the DOM, React applications often rely on libraries for
          routing and other client-side functionality.[11][12] A key advantage
          of React is that it only re-renders those parts of the page that have
          changed, avoiding unnecessary re-rendering of unchanged DOM elements.
        </p>
      </div>
    </div>
  );
};

export default Index;
