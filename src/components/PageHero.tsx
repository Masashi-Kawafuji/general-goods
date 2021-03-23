import React, { ReactComponentElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type PageHeroProps = {
  name: string;
  image: ReactComponentElement<typeof StaticImage>;
};

const PageHero: React.FC<PageHeroProps> = ({ name, image }) => (
  <div className="h-40 sm:h-48 md:h-72 lg:h-96 relative">
    {image}
    <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-center bg-gray-900 bg-opacity-50">
      <h1
        className="text-center text-2xl md:text-3xl lg:text-4xl font-bold"
        style={{ fontFamily: 'Vollkorn' }}
      >
        {name}
      </h1>
    </div>
  </div>
);

export default PageHero;
