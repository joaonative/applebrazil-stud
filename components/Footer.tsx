import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 flex flex-col mt-10 text-slate-500 text-sm font-medium gap-5">
      <div className="flex flex-row gap-2">
        <Image src={"/applelogo.svg"} width={20} height={20} alt="apple logo" />
        <Image src={"/arrow.svg"} width={20} height={20} alt="arrow icon" />
        <h1>Apple Store online</h1>
      </div>
      <blockquote>
        ° Somente para novas assinaturas e reativações de assinaturas
        qualificadas. R$ 14,90 por mês após o período de teste gratuito. Apenas
        uma oferta por ID Apple e uma oferta por família se você fizer parte de
        um grupo de Compartilhamento Familiar, independentemente do número de
        aparelhos que você ou sua família comprarem. A oferta não está
        disponível para quem já tiver aceitado a oferta de três meses ou um ano
        grátis de Apple TV+. Oferta válida por três meses a partir da data de
        ativação do aparelho qualificado. A assinatura é renovada
        automaticamente até que seja cancelada. Aplicam‑se outros termos e
        restrições. ^ Requer hardware e software compatíveis. Nem todo conteúdo
        está disponível em Áudio Espacial e Dolby Atmos. * Oferta disponível por
        tempo limitado para novos assinantes que conectarem um aparelho
        qualificado a um aparelho Apple com iOS 15 ou iPadOS 15 ou posterior.
        Oferta válida por três meses a partir da data de emparelhamento do
        aparelho qualificado. A assinatura é renovada automaticamente pelo preço
        mensal cobrado na sua região até que seja cancelada. Aqueles que já
        possuem aparelhos qualificados não precisam comprar nenhum produto. A
        disponibilidade de serviços varia de acordo com a região. Aplicam-se
        outros termos e restrições. 1. Preços especiais estão disponíveis para
        clientes qualificados. Para saber como funciona a qualificação para
        preços especiais, fale com um especialista Apple em uma loja ou ligue
        para 0800-761-0867. ⁺ Somente para novos assinantes. R$ 21,90 por mês
        após o período de teste. Oferta disponível por tempo limitado para novos
        assinantes que conectarem um aparelho qualificado a um aparelho Apple
        com iOS 15 ou iPadOS 15 ou posterior. Oferta válida por três meses a
        partir da data de emparelhamento do aparelho qualificado. Aqueles que já
        possuem aparelhos qualificados não precisam comprar nenhum produto de
        áudio. A assinatura é renovada automaticamente até que seja cancelada.
        Aplicam-se outros termos e restrições.
      </blockquote>
      <h1>
        Copyright © 2023 Apple Inc. Todos os direitos reservados. Apple Computer
        Brasil Ltda. CNPJ: 00.623.904/0003-35
      </h1>
    </footer>
  );
};

export default Footer;
