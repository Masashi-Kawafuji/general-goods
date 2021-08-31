import React, { FC } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import ArticleList from 'components/ArticleList';
import { GetArticleListQuery } from 'types/generated/graphql';
import PageTitle from 'components/PageTitle';

const News: FC<PageProps> = () => {
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
      <Head title="News" pathname="/news/" />
      <Container>
        <PageTitle>NEWS</PageTitle>
        <ArticleList articles={allDatoCmsArticle.nodes} />
      </Container>
    </Layout>
  );
};

export default News;
