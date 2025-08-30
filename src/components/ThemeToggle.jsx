import React, { useState } from "react";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (mode) => {
    setTheme(mode);
    if (mode === "light") {
      document.body.style.background = "white";
      document.body.style.color = "black";
    } else if (mode === "dark") {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else if (mode === "colorful") {
      document.body.style.background =
        "linear-gradient(to right, pink, skyblue, lavender)";
      document.body.style.color = "darkblue";
    }
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeTheme("light")}>☀️</button>
      <button onClick={() => changeTheme("dark")}>🌙</button>
      <button onClick={() => changeTheme("colorful")}>🎨</button>
    </div>
  );
};

export default Toggle;
