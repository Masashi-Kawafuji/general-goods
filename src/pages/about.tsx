import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';

const About: React.FC = () => (
  <Layout>
    <Head title="About" />
    <PageHero
      name="About"
      image={
        <StaticImage
          src="../images/schedule-page-hero.jpg"
          alt="page hero"
          layout="fullWidth"
          className="h-full"
        />
      }
    />
    <Container>About</Container>
  </Layout>
);

export default About;
