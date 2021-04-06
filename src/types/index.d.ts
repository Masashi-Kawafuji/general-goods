import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Article = {
  id: string;
  html: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    featuredImage: IGatsbyImageData;
  };
};
