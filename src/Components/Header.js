import React from "react";
import "./Header.css";
import Weather from "./Weather";
import Covid from "./Covid";
import MusicPlayer from "./MusicPlayer";

function Header() {
  return (
    <div className="header">
      <Weather />
      <Covid />
      <MusicPlayer />
    </div>
  );
}

export default Header;
