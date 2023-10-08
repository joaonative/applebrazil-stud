import React from "react";

const BuyCards = () => {
  return (
    <div className="flex flex-row gap-14 items-center justify-start">
      <div className="flex flex-col gap-2 items-center">
        <img src="/mac.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">Mac</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/iphone.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">iphone</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/ipad.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">ipad</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/watch.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">Apple Watch</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/airpods.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">Air Pods</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/airtag.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">Air Tag</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/apple tv 4k.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">Apple TV 4K</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/acessorios.png" alt="" className="object-contain w-30" />
        <h1 className="font-regular hover:underline">Acessórios</h1>
      </div>
    </div>
  );
};

export default BuyCards;
