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
  const { data } = await graphql(`
    query {
      allDatoCmsArticle(
        sort: { fields: meta___firstPublishedAt, order: DESC }
      ) {
        edges {
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
      }
    }
  `);

  const { createPage } = actions;

  data.allDatoCmsArticle.edges.forEach((edge) => {
    const { node } = edge;

    createPage({
      path: `/news/${node.originalId}`,
      component: path.resolve('./src/templates/ArticleTemplate.tsx'),
      context: edge,
    });
  });
};
