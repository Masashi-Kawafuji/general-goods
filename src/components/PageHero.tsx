import React, { ReactComponentElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type PageHeroProps = {
  name?: string;
  image: ReactComponentElement<typeof StaticImage>;
};

const PageHero: React.FC<PageHeroProps> = ({ name, image }) => (
  <div className="h-40 sm:h-48 md:h-72 lg:h-96 mb-11 relative">
    {image}
    <div className="absolute inset-0 flex flex-col justify-center bg-gray-900 bg-opacity-50">
      {name && (
        <p className="text-center text-4xl font-vollkorn font-bold">{name}</p>
      )}
    </div>
  </div>
);

export default PageHero;
