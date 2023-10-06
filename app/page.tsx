import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-between">
      <div className="max-w-2xl">
        <Title
          text="Loja."
          secText="O melhor jeito de comprar o que você ama."
        />
      </div>
    </div>
  );
}
