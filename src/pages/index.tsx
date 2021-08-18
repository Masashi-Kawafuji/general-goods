import React, { FC } from 'react';
import { useStaticQuery, graphql, Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import ArticleList from 'components/ArticleList';
import Section from 'components/Section';
import Divider from 'components/Divider';
import SocialLink from 'components/ExternalLink';
import Button from 'components/Button';
import { GetRecentArticlesQuery } from 'types/generated/graphql';

const Home: FC<PageProps> = () => {
  const { allDatoCmsArticle } = useStaticQuery<GetRecentArticlesQuery>(graphql`
    query GetRecentArticles {
      allDatoCmsArticle(
        limit: 3
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
      <Head />
      <Container>
        <Section title="News">
          <div className="mb-12">
            <ArticleList articles={allDatoCmsArticle.nodes} />
          </div>
          <div className="text-center">
            <Button
              as={Link}
              to="/news/"
              inverse
              className="mx-auto font-vollkorn"
            >
              All News
            </Button>
          </div>
        </Section>
      </Container>
      <Divider />
      <Container>
        <Section title="Recently Released">
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
      </Container>
      <Divider />
      <Container>
        <Section title="Follow Us!">
          <ul className="flex justify-evenly">
            <li>
              <SocialLink url="https://twitter.com/_General_Goods_">
                <FaTwitter size="2rem" />
              </SocialLink>
            </li>
            <li>
              <SocialLink url="https://www.instagram.com/_general_goods_">
                <FaInstagram size="2rem" />
              </SocialLink>
            </li>
            <li>
              <SocialLink url="https://www.youtube.com/channel/UC2NSO7mxY2L7C9ft0FL5htw">
                <FaYoutube size="2rem" />
              </SocialLink>
            </li>
          </ul>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
