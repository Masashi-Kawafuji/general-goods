import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { getImage, GatsbyImage, ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import { ArticleFieldsFragment } from '../types/generated/graphql';

type ArticlePageProps = PageProps<unknown, ArticleFieldsFragment>;

export const ARTICLE_FIELDS = graphql`
  fragment ArticleFields on MarkdownRemark {
    html
    frontmatter {
      title
      date(formatString: "YYYY.MM.DD")
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;

const Article: React.FC<ArticlePageProps> = ({
  pageContext: {
    html,
    frontmatter: { title, date, featuredImage },
  },
}) => {
  const image = getImage(featuredImage as ImageDataLike);

  return (
    <Layout>
      <Head pageTitle={title} />
      <Container>
        <div>
          <h1 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-semibold">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">{date}</p>
        </div>
        <hr className="my-4 sm:my-6 border-gray-400" />
        {image && (
          <GatsbyImage
            image={image}
            alt={`${title} featured image.`}
            className="mb-4 sm:mb-6"
          />
        )}
        <div
          className="prose-sm lg:prose font-light"
          dangerouslySetInnerHTML={{ __html: html! }}
        />
      </Container>
    </Layout>
  );
};

export default Article;
