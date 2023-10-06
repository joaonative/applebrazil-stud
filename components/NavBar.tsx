import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <header className="flex flex-row justify-center items-center gap-12">
      <img src="/applelogo.svg" alt="apple logo" />
      <NavBarItem title="Loja" />
      <NavBarItem title="Mac" />
      <NavBarItem title="iPad" />
      <NavBarItem title="iPhone" />
      <NavBarItem title="Watch" />
      <NavBarItem title="AirDots" />
      <NavBarItem title="Tv e casa" />
      <NavBarItem title="Entreterimento" />
      <NavBarItem title="Acessorios" />
      <NavBarItem title="Suporte" />
    </header>
  );
};

export default NavBar;
