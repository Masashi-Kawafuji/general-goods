import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import PageHero from '../components/PageHero';
import Container from '../components/Container';
import Grid from '../components/Grid';
import NewsItem from '../components/NewsItem';
import { GetArticlesQuery } from './news';

const Home: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetArticlesQuery>(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head />
      <PageHero
        name=""
        image={
          <StaticImage
            src="../images/hero.jpg"
            alt="hero"
            layout="fullWidth"
            className="h-full"
          />
        }
      />
      <Container>
        <section>
          <Grid mobile={1} tablet={2} desktop={3}>
            {allMarkdownRemark.nodes.map(({ id, excerpt, frontmatter }) => (
              <NewsItem
                key={id}
                id={id}
                excerpt={excerpt}
                frontmatter={frontmatter}
              />
            ))}
          </Grid>
        </section>
      </Container>
    </Layout>
  );
};

export default Home;
