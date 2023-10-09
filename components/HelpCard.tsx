import { title } from "process";
import React from "react";

const HelpCard = ({
  message,
  smMessage,
  subMessage,
  bg,
  xl,
  white,
}: {
  message: string;
  smMessage?: boolean;
  subMessage?: string;
  bg: string;
  xl?: boolean;
  white?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col justify-start gap-4 px-5 py-10 rounded-2xl  bg-cover card ${bg} ${
        xl ? "w-[500px] h-[550px]" : "w-[500px] h-[265px]"
      }`}
    >
      <h2 className="text-sm text-slate-500  font-medium">{subMessage}</h2>
      <h1 className={`font-semibold ${subMessage ? "text-3xl" : "text-2xl"} `}>
        {smMessage ? (
          <h1 className={`max-w-[220px]`}>{message}</h1>
        ) : (
          <h1 className={`${white ? "text-white" : "text-black"}`}>
            {message}
          </h1>
        )}
      </h1>
    </div>
  );
};

export default HelpCard;
