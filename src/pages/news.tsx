import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Article } from '../types';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';

type GetArticlesQuery = {
  allMarkdownRemark: {
    nodes: Omit<Article, 'html'>[];
  };
};

const News: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetArticlesQuery>(graphql`
    query {
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
    <Layout>
      <Head title="News" />
      <PageHero
        name="News"
        image={
          <StaticImage
            src="../images/schedule-page-hero.jpg"
            alt="page hero"
            layout="fullWidth"
            className="h-full"
          />
        }
      />
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
