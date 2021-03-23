import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';

const Contact: React.FC = () => (
  <Layout>
    <Head title="Contact" />
    <PageHero
      name="Contact"
      image={
        <StaticImage
          src="../images/schedule-page-hero.jpg"
          alt="page hero"
          layout="fullWidth"
          className="h-full"
        />
      }
    />
    <Container>Contact</Container>
  </Layout>
);

export default Contact;
