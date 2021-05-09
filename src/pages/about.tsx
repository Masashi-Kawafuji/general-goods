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
          src="../images/hero.jpg"
          alt="page hero"
          layout="fullWidth"
          className="h-full"
        />
      }
    />
    <Container>
      <p className="text-center text-gray-300 font-light">
        都内で活動するロック・ポップバンド。メンバーはyuta.(Vo/Gt)、wataru(Gt)、masa(Ba)、yura(Dr)。
      </p>
    </Container>
  </Layout>
);

export default About;
