import React from "react";

const Title = ({ text, secText }: { text: string; secText: string }) => {
  return (
    <h1 className="text-4xl font-semibold flex flex-row">
      {text}
      <p className="text-sectitle">{secText}</p>
    </h1>
  );
};

export default Title;
