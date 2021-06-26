const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query GetArticles {
      allDatoCmsArticle {
        nodes {
          meta {
            firstPublishedAt(formatString: "YYYY.MM.DD")
          }
          originalId
          title
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
      }
    }
  `);

  data.allDatoCmsArticle.nodes.forEach((node) => {
    const article = node;
    const { originalId } = article;
    delete article.originalId;

    createPage({
      path: `/news/${originalId}`,
      component: path.resolve('./src/templates/Article.tsx'),
      context: node,
    });
  });
};
