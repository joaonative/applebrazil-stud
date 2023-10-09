import Image from "next/image";
import React from "react";

const AdvantagesCard = ({
  message,
  icon,
}: {
  message: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col justify-start gap-4 px-5 py-10 rounded-2xl w-[400px] card">
      <Image
        src={`/${icon}.svg`}
        width={50}
        height={50}
        alt={`${icon} icon ilustration`}
      />
      <h1 className="font-medium text-2xl">{message}</h1>
    </div>
  );
};

export default AdvantagesCard;
