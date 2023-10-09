import React from "react";
import Section from "./Section";
import HelpCard from "./HelpCard";

const HelpSection = () => {
  return (
    <Section
      sectionTitle="A ajuda está aqui."
      sectionSecTitle="Quando e como você precisar."
    >
      <div className="flex flex-row gap-5">
        <HelpCard
          message="
          Compre com a ajuda de um especialista na Apple Store ou online."
          subMessage="ESPECIALISTA DA APPLE"
          bg="bg-help1"
          xl
        />
        <div className="flex flex-col justify-between">
          <HelpCard
            message="
            Conheça seu novo aparelho com uma Sessão Personalizada gratuita."
            bg="bg-help2"
          />
          <HelpCard
            message="
            Receba assistência técnica e suporte no Genius Bar."
            bg="bg-help3"
            smMessage
          />
        </div>
      </div>
    </Section>
  );
};

export default HelpSection;
