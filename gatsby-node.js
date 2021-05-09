const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query getArticles {
      allMarkdownRemark {
        nodes {
          id
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
      }
    }
  `);

  data?.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/news/${node.id}`,
      component: path.resolve('./src/templates/Article.tsx'),
      context: node,
    });
  });
};
