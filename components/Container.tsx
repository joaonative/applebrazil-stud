import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-screen-lg mt-28">{children}</div>;
};

export default Container;
