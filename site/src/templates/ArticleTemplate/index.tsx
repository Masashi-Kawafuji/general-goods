import { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import { StructuredText } from 'react-datocms';
import { ArticleFieldsFragment } from 'types/generated/graphql';
import Divider from 'components/Divider';
import ArticleNavigation from './ArticleNavigation';

export const ARTICLE_FIELDS = graphql`
  fragment ArticleFields on DatoCmsArticleEdge {
    previous {
      ...ArticleNavigationFields
    }
    next {
      ...ArticleNavigationFields
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
          ... on DatoCmsExternalvideo {
            __typename
            id: originalId
            externalVideo {
              providerUid
            }
          }
        }
      }
    }
  }
`;

type ArticlePageProps = PageProps<unknown, ArticleFieldsFragment>;

const ArticleTemplate: FC<ArticlePageProps> = ({
  pageContext: { next, node, previous },
}) => {
  const image = getImage(node.featuredImage.gatsbyImageData);
  console.log(node.body.blocks);

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
            {node.meta.firstPublishedAt}
          </p>
        </div>
        <Divider className="my-8" />
        {image && (
          <GatsbyImage
            image={image}
            alt={`${node.title} featured image.`}
            className="mb-4 sm:mb-6"
          />
        )}
        <div className="mb-32 prose prose-sm sm:prose min-w-full">
          <StructuredText
            data={node.body}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'DatoCmsImage':
                  return <img src={record.image.url} alt={record.image.alt} />;
                case 'DatoCmsExternalvideo':
                  return (
                    <div
                      className="relative"
                      style={{ paddingBottom: '56.25%' }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${record.externalVideo.providerUid}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  );
                default:
                  return null;
              }
            }}
          />
        </div>
        <div className="flex py-6 mb-10 border-t border-b border-gray-400">
          {previous && (
            <ArticleNavigation direction="prev" article={previous} />
          )}
          {next && <ArticleNavigation direction="next" article={next} />}
        </div>
      </Container>
    </Layout>
  );
};

export default ArticleTemplate;
