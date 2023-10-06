import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <header className="flex flex-row justify-center items-center gap-12 py-5">
      <img src="/applelogo.svg" alt="apple logo" />
      <NavBarItem title="Loja" />
      <NavBarItem title="Mac" />
      <NavBarItem title="iPad" />
      <NavBarItem title="iPhone" />
      <NavBarItem title="Watch" />
      <NavBarItem title="AirDots" />
      <NavBarItem title="TV e casa" />
      <NavBarItem title="Entreterimento" />
      <NavBarItem title="Acessorios" />
      <NavBarItem title="Suporte" />
      <img src="/search.svg" alt="apple logo" />
      <img src="/shop.svg" alt="apple logo" />
    </header>
  );
};

export default NavBar;
