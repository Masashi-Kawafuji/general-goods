import React, { ComponentProps } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import Grid from '../components/Grid';
import NewsItem from '../components/NewsItem';

export type GetArticlesQuery = {
  allMarkdownRemark: {
    nodes: ComponentProps<typeof NewsItem>[];
  };
};

const News: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetArticlesQuery>(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
      </Container>
    </Layout>
  );
};

export default News;
