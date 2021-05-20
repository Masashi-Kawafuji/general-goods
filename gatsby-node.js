const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Frontmatter {
      title: String!
      featuredImage: File @link(by: "relativePath")
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }
  `;
  createTypes(typeDefs);
};

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
