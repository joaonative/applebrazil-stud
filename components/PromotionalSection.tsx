import React from "react";
import Section from "./Section";
import HelpCard from "./HelpCard";

const PromotionalSection = () => {
  return (
    <Section
      sectionTitle="Lojas Especiais."
      sectionSecTitle="Preços exclusivos para estudantes, educadores e empresas."
    >
      <div className="flex flex-row gap-5">
        <HelpCard
          message="
          Economize no Mac ou iPad com os preços especiais para a educação."
          subMessage="EDUCAÇÃO"
          bg="bg-promotional1"
          xl
        />
        <HelpCard
          message="
          Seja qual for o tamanho da sua empresa, queremos trabalhar com você."
          subMessage="NEGÓCIOS"
          bg="bg-promotional2"
          xl
          white
        />
      </div>
    </Section>
  );
};

export default PromotionalSection;
