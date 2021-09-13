/* eslint-disable react/no-array-index-key */
import { ComponentPropsWithoutRef, FC, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Carousel as BaseCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselContentFieldsFragment } from 'types/generated/graphql';
import Arrow from './Arrow';
import Dot from './Dot';

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

const Carousel: FC<CarouselProps> = ({ contents }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleArrowClick: ComponentPropsWithoutRef<typeof Arrow>['onClick'] = (
    type
  ) => {
    const index = selectedItem + (type === 'prev' ? -1 : 1);
    setSelectedItem(index);
  };

  const handleDotClick: ComponentPropsWithoutRef<typeof Dot>['onClick'] = (
    contentId
  ) => {
    setSelectedItem(contentId);
  };

  return (
    <div>
      <div className="flex mb-2">
        <Arrow type="prev" onClick={handleArrowClick} />
        <BaseCarousel
          autoPlay
          interval={5000}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={selectedItem}
          onChange={(index) => setSelectedItem(index)}
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
        <Arrow type="next" onClick={handleArrowClick} />
      </div>
      <ul className="flex justify-center">
        {contents.map((_, index) => (
          <li key={index}>
            <Dot
              contentId={index}
              isSelected={index === selectedItem}
              onClick={handleDotClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Carousel;
