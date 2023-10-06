import Sugestion from "@/components/Sugestion";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex flex-row justify-between">
      <div className="max-w-2xl">
        <Title
          text="Loja."
          secText="O melhor jeito de comprar o que você ama."
        />
      </div>
      <div>
        <Sugestion
          question="Precisa de ajuda para comprar?"
          link="Fale com um especialista"
        />
      </div>
    </div>
  );
}
