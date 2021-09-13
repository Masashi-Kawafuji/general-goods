import { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import { StructuredText } from 'react-datocms';
import { ArticleFieldsFragment } from 'types/generated/graphql';
import Divider from 'components/Divider';

export const ARTICLE_FIELDS = graphql`
  fragment ArticleFields on DatoCmsArticleEdge {
    next {
      originalId
      title
    }
    node {
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
    previous {
      originalId
      title
    }
  }
`;

type ArticlePageProps = PageProps<unknown, ArticleFieldsFragment>;

const ArticleTemplate: FC<ArticlePageProps> = ({
  pageContext: { next, node, previous },
}) => {
  const image = getImage(node.featuredImage.gatsbyImageData);

  return (
    <Layout>
      <Head
        title={node.title}
        description={node.excerpt}
        pathname={`/news/${node.originalId}`}
        ogType="article"
        ogImageUrl={node.featuredImage.gatsbyImageData.images.fallback.src}
      />
      <Container>
        <div className="pt-8">
          <h1 className="mb-2 sm:mb-4 text-lg sm:text-3xl font-semibold">
            {node.title}
          </h1>
          <p className="text-xs sm:text-sm text-darken">
            {node.meta?.firstPublishedAt}
          </p>
        </div>
        {/* <hr className="my-4 sm:my-6 border-gray-400" /> */}
        <Divider />
        {image && (
          <GatsbyImage
            image={image}
            alt={`${node.title} featured image.`}
            className="mb-4 sm:mb-6"
          />
        )}
        <div className="prose prose-sm sm:prose min-w-full">
          <StructuredText
            data={node.body}
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
