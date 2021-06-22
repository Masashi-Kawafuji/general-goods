import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import Grid from '../components/Grid';
import NewsItem from '../components/NewsItem';
import { GetArticleListQuery } from '../types/generated/graphql';

const News: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetArticleListQuery>(graphql`
    query GetArticleList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          ...ArticleItemFields
        }
      }
    }
  `);

  const articles = allMarkdownRemark.nodes.slice(
    1,
    allMarkdownRemark.nodes.length
  );

  return (
    <Layout>
      <Head pageTitle="News" />
      <PageHero
        name="News"
        image={
          <StaticImage
            src="../images/concert-2.jpg"
            alt="page hero"
            layout="fullWidth"
            className="h-full"
          />
        }
      />
      <Container>
        <Grid mobile={1} tablet={2} desktop={3}>
          {articles.map((article) => (
            <NewsItem key={article.id} article={article} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default News;
