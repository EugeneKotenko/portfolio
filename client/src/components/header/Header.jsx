import React from "react";
import './Header.scss'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Yevhenii Kotenko</h1>
        <h1 className="text text-light">Front-End React Developer</h1>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
