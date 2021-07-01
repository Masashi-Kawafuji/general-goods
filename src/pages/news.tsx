import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import ArticleList from 'components/ArticleList';
import { GetArticleListQuery } from 'types/generated/graphql';

const News: React.FC = () => {
  const { allDatoCmsArticle } = useStaticQuery<GetArticleListQuery>(graphql`
    query GetArticleList {
      allDatoCmsArticle(
        sort: { order: DESC, fields: meta___firstPublishedAt }
      ) {
        nodes {
          ...ArticleItemFields
        }
      }
    }
  `);

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
        <ArticleList articles={allDatoCmsArticle.nodes} />
      </Container>
    </Layout>
  );
};

export default News;
