const path = require('path');

exports.onCreateBabelConfig = ({ actions }) => {
  const { setBabelPlugin } = actions;

  setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

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
      }
    }
  `);

  data.allDatoCmsArticle.nodes.forEach((node) => {
    const article = node;

    createPage({
      path: `/news/${article.originalId}`,
      component: path.resolve('./src/templates/ArticleTemplate.tsx'),
      context: node,
    });
  });
};
