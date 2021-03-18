import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';

type Article = {
  id: string;
  html: string;
  frontmatter: {
    title: string;
    date: string;
  };
};

type NewsArticlePageProps = PageProps<unknown, Article>;

const newsArticle: React.FC<NewsArticlePageProps> = ({
  pageContext: {
    html,
    frontmatter: { title, date },
  },
}) => (
  <Layout>
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Container>
  </Layout>
);

export default newsArticle;
