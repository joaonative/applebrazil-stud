import React from "react";

const NewCard = ({
  productName,
  title,
  price,
  bg,
  white,
}: {
  productName: string;
  title: string;
  price: number;
  bg: string;
  white?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col justify-start gap-4 px-5 py-10 rounded-2xl w-[400px] h-[500px] bg-cover card ${bg} ${
        white ? "text-white" : "text-black"
      }`}
    >
      <h2 className="text-md uppercase">{productName}</h2>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h2 className="text-lg">A partir de R$ {price}</h2>
    </div>
  );
};
export default NewCard;
