import Sugestion from "./Sugestion";
import Title from "./Title";

import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="max-w-2xl">
        <Title
          text="Loja."
          secText="O melhor jeito de comprar o que você ama."
        />
      </div>
      <div className="flex flex-col gap-2">
        <Sugestion
          question="Precisa de ajuda para comprar?"
          link="Fale com um especialista"
        />
        <Sugestion
          question="Visite uma Apple Store"
          link="Procure uma loja perto de você"
        />
      </div>
    </div>
  );
};

export default HeroSection;
