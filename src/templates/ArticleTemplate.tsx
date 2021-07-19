import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import { StructuredText } from 'react-datocms';
import { ArticleFieldsFragment } from 'types/generated/graphql';

export const ARTICLE_FIELDS = graphql`
  fragment ArticleFields on DatoCmsArticle {
    meta {
      firstPublishedAt(formatString: "YYYY.MM.DD")
    }
    originalId
    title
    excerpt
    featuredImage {
      gatsbyImageData
    }
    body {
      value
      blocks {
        ... on DatoCmsImage {
          __typename
          id: originalId
          image {
            url
            alt
          }
        }
      }
    }
  }
`;

type ArticlePageProps = PageProps<unknown, ArticleFieldsFragment>;

const ArticleTemplate: React.FC<ArticlePageProps> = ({
  pageContext: { originalId, meta, title, excerpt, featuredImage, body },
}) => {
  const image = getImage(featuredImage.gatsbyImageData);

  return (
    <Layout>
      <Head
        title={title}
        description={excerpt}
        pathname={`/news/${originalId}`}
        ogType="article"
        ogImageUrl={featuredImage.gatsbyImageData.images.fallback.src}
      />
      <Container>
        <div>
          <h1 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-semibold">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-darken">
            {meta?.firstPublishedAt}
          </p>
        </div>
        <hr className="my-4 sm:my-6 border-gray-400" />
        {image && (
          <GatsbyImage
            image={image}
            alt={`${title} featured image.`}
            className="mb-4 sm:mb-6"
          />
        )}
        <div className="prose prose-sm sm:prose min-w-full">
          <StructuredText
            data={body}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'DatoCmsImage':
                  return <img src={record.image.url} alt={record.image.alt} />;
                default:
                  return null;
              }
            }}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default ArticleTemplate;
