import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import BaseCarousel, {
  arrowsPlugin,
  autoplayPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { CarouselContentFieldsFragment } from 'types/generated/graphql';
import Arrow from './Arrow';

export type CarouselProps = {
  contents: CarouselContentFieldsFragment[];
};

export const CAROUSEL_CONTENT_FIELDS = graphql`
  fragment CarouselContentFields on DatoCmsArticle {
    featuredImage {
      gatsbyImageData(aspectRatio: 1.77)
      alt
    }
    originalId
  }
`;

const Carousel: FC<CarouselProps> = ({ contents }) => (
  <BaseCarousel
    plugins={[
      'infinite',
      {
        resolve: arrowsPlugin,
        options: {
          arrowLeft: <Arrow type="prev" />,
          arrowRight: <Arrow type="next" />,
          addArrowClickHandler: true,
        },
      },
      {
        resolve: autoplayPlugin,
        options: {
          interval: 5000,
        },
      },
    ]}
    animationSpeed={1000}
  >
    {contents.map(({ featuredImage, originalId }) => (
      <Link key={originalId} to={`/news/${originalId}`}>
        <GatsbyImage
          image={featuredImage.gatsbyImageData}
          alt={featuredImage.alt}
        />
      </Link>
    ))}
  </BaseCarousel>
);

export default Carousel;
