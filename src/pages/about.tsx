import React, { FC } from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import { GetAboutPageContentQuery } from 'types/generated/graphql';
import PageTitle from 'components/PageTitle';

const About: FC<PageProps> = () => {
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
      <Head title="About" description={excerpt} pathname="/about/" />
      <Container>
        <PageTitle>ABOUT</PageTitle>
        <div
          className="prose prose-sm sm:prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
};

export default About;
