import React, { FC } from 'react';

type SectionProps = {
  title?: string;
  className?: string | undefined;
};

const Section: FC<SectionProps> = ({ title, className, children }) => (
  <section className={className}>
    {title && (
      <h2 className="mb-8 text-center text-3xl font-vollkorn font-semibold">
        {title}
      </h2>
    )}
    {children}
  </section>
);

export default Section;
