import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Article } from '../types';
import Layout from '../components/Layout';
import Container from '../components/Container';

type GetArticlesQuery = {
  allMarkdownRemark: {
    nodes: Omit<Article, 'html'>[];
  };
};

const News: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetArticlesQuery>(graphql`
    query getArticles {
      allMarkdownRemark {
        nodes {
          excerpt
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="News">
      <Container>
        <ul>
          {allMarkdownRemark.nodes.map(({ id, excerpt, frontmatter }) => (
            <li key={id}>
              <p>{frontmatter.date}</p>
              <Link to={`/news/${id}`}>{frontmatter.title}</Link>
              <p>{excerpt}</p>
              <hr />
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default News;
