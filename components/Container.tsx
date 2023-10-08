import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-screen-xl mt-20">{children}</div>;
};

export default Container;
