import React from "react";
import { twMerge } from "tailwind-merge";

const Section = ({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
    id?: string;
}) => {
  return (
    <section id={id} className={twMerge("py-16 px-8", className)}>{children}</section>
  );
};

export default Section;
