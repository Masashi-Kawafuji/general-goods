import React from 'react';
import { PageProps } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Article as ArticleType } from '../types';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';

type ArticlePageProps = PageProps<unknown, Omit<ArticleType, 'excerpt'>>;

const Article: React.FC<ArticlePageProps> = ({
  pageContext: {
    html,
    frontmatter: { title, date, featuredImage },
  },
}) => {
  const image = getImage(featuredImage);

  return (
    <Layout>
      <Head title={title} />
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
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
};

export default Article;
