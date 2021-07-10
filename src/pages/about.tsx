import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import { GetAboutPageContentQuery } from 'types/generated/graphql';

const About: React.FC = () => {
  const { allDatoCmsAbout } = useStaticQuery<GetAboutPageContentQuery>(graphql`
    query GetAboutPageContent {
      allDatoCmsAbout {
        nodes {
          bodyNode {
            childMarkdownRemark {
              excerpt
              html
            }
          }
        }
      }
    }
  `);

  const { excerpt, html } =
    allDatoCmsAbout.nodes[0].bodyNode.childMarkdownRemark;

  return (
    <Layout>
      <Head title="About" description={excerpt} />
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
        <div
          className="prose prose-sm sm:prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
};

export default About;
