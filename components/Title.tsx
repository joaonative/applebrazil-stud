import React from "react";

const Title = ({
  text,
  secText,
  sm,
}: {
  text: string;
  secText: string;
  sm?: boolean;
}) => {
  return (
    <div className={`flex font-semibold ${sm ? "text-3xl" : "text-5xl"}`}>
      <p>
        {text}
        <span className="text-sectitle">{secText}</span>
      </p>
    </div>
  );
};

export default Title;
