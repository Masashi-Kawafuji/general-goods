import React from 'react';
import { PageProps } from 'gatsby';
import { Article } from '../types';
import Layout from '../components/Layout';
import Container from '../components/Container';

type NewsArticlePageProps = PageProps<unknown, Omit<Article, 'excerpt'>>;

const NewsArticle: React.FC<NewsArticlePageProps> = ({
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

export default NewsArticle;
