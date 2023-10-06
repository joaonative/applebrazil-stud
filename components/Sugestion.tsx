import Image from "@/node_modules/next/image";
import React from "react";

const Sugestion = ({ question, link }: { question: string; link: string }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <span>
        <img
          src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696550400&semt=sph"
          alt="woman"
          className="rounded-full w-10 h-10 object-cover"
        />
      </span>
      <div className="flex flex-col items-start justify-center">
        <h1>{question}</h1>
        <p className="text-blue-600 underline">{link}</p>
      </div>
    </div>
  );
};

export default Sugestion;
