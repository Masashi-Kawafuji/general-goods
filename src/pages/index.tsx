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
import { GetArticlesQuery } from './news';

const Home: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<GetArticlesQuery>(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
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
            {allMarkdownRemark.nodes.map(({ id, excerpt, frontmatter }) => (
              <NewsItem
                key={id}
                id={id}
                excerpt={excerpt}
                frontmatter={frontmatter}
              />
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
      <hr className="my-8 border-gray-600" />
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
      <hr className="my-8 border-gray-600" />
      <Container>
        <h2 className="mb-8 text-center text-3xl font-vollkorn font-semibold">
          Follow Us!
        </h2>
        <ul className="flex justify-evenly">
          <li>
            <FaTwitter size="2rem" />
          </li>
          <li>
            <FaInstagram size="2rem" />
          </li>
          <li>
            <FaYoutube size="2rem" />
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Home;
