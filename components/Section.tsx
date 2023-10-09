import React from "react";
import Title from "./Title";

const Section = ({
  children,
  sectionTitle,
  sectionSecTitle,
}: {
  children: React.ReactNode;
  sectionTitle: string;
  sectionSecTitle: string;
}) => {
  return (
    <section className="flex flex-col gap-5">
      <Title text={sectionTitle} secText={sectionSecTitle} sm />
      {children}
    </section>
  );
};

export default Section;
