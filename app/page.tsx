import BuyCards from "@/components/BuyCards";
import NewCard from "@/components/NewCard";
import Section from "@/components/Section";
import Sugestion from "@/components/Sugestion";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
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
      <BuyCards />
      <Section
        sectionTitle="As novidades."
        sectionSecTitle="Veja o que acabou de chegar."
      >
        <div className="gap-10">
          <div className="flex flex-row gap-5">
            <NewCard
              productName="iphone 15 pro"
              title="Titânio."
              price={9.299}
              bg={1}
            />
            <NewCard
              productName="iphone 15 pro"
              title="Uauforia."
              price={7.299}
              bg={2}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
