import React from 'react';
import { PageProps } from 'gatsby';
import { Article } from '../types';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';

type NewsArticlePageProps = PageProps<unknown, Omit<Article, 'excerpt'>>;

const NewsArticle: React.FC<NewsArticlePageProps> = ({
  pageContext: {
    html,
    frontmatter: { title, date },
  },
}) => (
  <Layout>
    <Head title={title} />
    <Container>
      <div>
        <h1 className="text-xl sm:text-4xl font-semibold mb-4">{title}</h1>
        <p className="text-xs sm:text-sm text-gray-400">{date}</p>
      </div>
      <hr className="my-4 border-gray-400" />
      <div
        className="text-gray-300 text-xs sm:text-sm lg:text-base font-light"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  </Layout>
);

export default NewsArticle;
