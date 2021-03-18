const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query newsArticleQuery {
      allMarkdownRemark {
        nodes {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/news/${node.id}`,
      component: path.resolve('./src/templates/newsArticle.tsx'),
      context: node,
    });
  });
};
