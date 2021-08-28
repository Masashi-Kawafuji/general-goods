import React, { FC } from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type SectionProps = {
  title?: string;
  className?: string | undefined;
};

const Section: FC<SectionProps> = ({ title, className, children }) => (
  <section className={mergeCssClassName('mb-14', className)}>
    {title && (
      <h2 className="mb-8 text-4xl font-oswald font-semibold">{title}</h2>
    )}
    {children}
  </section>
);

export default Section;
