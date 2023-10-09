import React from "react";
import Section from "./Section";
import AdvantagesCard from "./AdvantagesCard";

const AdvantagesSection = () => {
  return (
    <Section
      sectionTitle="Na Apple Store, é diferente."
      sectionSecTitle="Ainda mais motivos para comprar com a gente."
    >
      <div className="flex flex-row justify-between">
        <AdvantagesCard
          message="Frete grátis em todos os pedidos."
          icon="frete"
        />
        <AdvantagesCard
          message="Várias opções de parcelamento."
          icon="credito"
        />
        <AdvantagesCard
          message="Tenha uma experiência de compra personalizada com o app Apple Store."
          icon="appleshop"
        />
      </div>
    </Section>
  );
};

export default AdvantagesSection;
