import Link from "@/node_modules/next/link";
import React from "react";

const NavBarItem = ({ title }: { title: string }) => {
  return (
    <Link href={`/${title}`}>
      <p className="text-xs font-light">{title}</p>
    </Link>
  );
};

export default NavBarItem;
