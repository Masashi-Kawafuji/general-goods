import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import Layout from '../components/Layout';
import Head from '../components/Head';
import PageHero from '../components/PageHero';
import Container from '../components/Container';
import Grid from '../components/Grid';
import NewsItem from '../components/NewsItem';
import Divider from '../components/Divider';
import SocialLink from '../components/SocialLink';
import { GetFewArticlesQuery } from '../types/generated/graphql';

const Home: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetFewArticlesQuery>(graphql`
    query GetFewArticles {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
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
        <h2 className="mb-8 text-center text-3xl font-vollkorn font-semibold">
          News
        </h2>
        <div className="mb-12">
          <Grid mobile={1} tablet={2} desktop={3}>
            {articles.map((article) => (
              <NewsItem key={article.id} article={article} />
            ))}
          </Grid>
        </div>
        <div className="text-center">
          <Link
            to="/news/"
            className="inline-block px-3 py-1 bg-gray-900 text-gray-400 border-gray-400 hover:text-gray-200 hover:border-gray-200 border-2 font-medium tracking-wide transition-colors duration-300"
          >
            All News
          </Link>
        </div>
      </Container>
      <Divider />
      <Container>
        <h2 className="mb-8 text-center text-3xl font-vollkorn font-semibold">
          Recently Released
        </h2>
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
      </Container>
      <Divider />
      <Container>
        <h2 className="mb-8 text-center text-3xl font-vollkorn font-semibold">
          Follow Us!
        </h2>
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
      </Container>
    </Layout>
  );
};

export default Home;
