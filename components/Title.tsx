import React from "react";

const Title = ({ text, secText }: { text: string; secText: string }) => {
  return (
    <div className="flex text-5xl font-semibold">
      <p className="">
        {text}
        <span className="text-sectitle">{secText}</span>
      </p>
    </div>
  );
};

export default Title;
