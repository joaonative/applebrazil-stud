import Link from "next/link";
import React from "react";
import NewCard from "./NewCard";
import Section from "./Section";

const NewsSection = () => {
  return (
    <Section
      sectionTitle="As novidades."
      sectionSecTitle="Veja o que acabou de chegar."
    >
      <div className="gap-10">
        <div className="flex flex-row gap-5">
          <Link href={"/"}>
            <NewCard
              productName="iphone 15 pro"
              title="Titânio."
              price={9.299}
              bg={"bg-bg1"}
              white
            />
          </Link>
          <Link href={"/"}>
            <NewCard
              productName="iphone 15 pro"
              title="Uauforia."
              price={7.299}
              bg={"bg-bg2"}
            />
          </Link>
          <Link href={"/"}>
            <NewCard
              productName="apple watch series s"
              title="Brilha mais em tudo."
              price={4.299}
              bg={"bg-bg3"}
              white
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default NewsSection;
