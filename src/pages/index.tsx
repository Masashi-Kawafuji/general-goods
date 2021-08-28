import React, { FC } from 'react';
import { useStaticQuery, graphql, Link, PageProps } from 'gatsby';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import Carousel from 'components/Carousel';
import ArticleList from 'components/ArticleList';
import Section from 'components/Section';
import Button from 'components/Button';
import { GetTopPageContentQuery } from 'types/generated/graphql';
import LiveInfoList from 'components/LiveInfoList';

const Home: FC<PageProps> = () => {
  const { carouselContents, allDatoCmsArticle, allDatoCmsSchedule } =
    useStaticQuery<GetTopPageContentQuery>(graphql`
      query GetTopPageContent {
        carouselContents: allDatoCmsArticle(
          filter: { carousel: { eq: true } }
          sort: { order: DESC, fields: meta___firstPublishedAt }
          limit: 3
        ) {
          nodes {
            ...CarouselContentFields
          }
        }
        allDatoCmsArticle(
          limit: 3
          sort: { order: DESC, fields: meta___firstPublishedAt }
        ) {
          nodes {
            ...ArticleItemFields
          }
        }
        allDatoCmsSchedule(sort: { order: DESC, fields: heldOn }) {
          nodes {
            ...LiveInfoListItemField
          }
        }
      }
    `);

  return (
    <Layout>
      <Head />
      <Section className="sm:hidden">
        <Carousel contents={carouselContents.nodes} />
      </Section>
      <Container>
        <Section className="hidden sm:block pt-12">
          <Carousel contents={carouselContents.nodes} />
        </Section>
        <Section title="NEWS">
          <div className="mb-10">
            <ArticleList articles={allDatoCmsArticle.nodes} />
          </div>
          <div className="flex justify-end">
            <Button
              as={Link}
              to="/news/"
              primitive
              inverse
              className="font-vollkorn"
            >
              MORE NEWS
            </Button>
          </div>
        </Section>
        <Section title="RECENTY RELASED">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/tsKeeG7-jCw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Section>
        <Section title="LIVE INFO">
          <LiveInfoList liveInfos={allDatoCmsSchedule.nodes} />
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
