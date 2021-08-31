import React, { FC } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import PageTitle from 'components/PageTitle';
import { GetLiveInfoPageContentQuery } from 'types/generated/graphql';
import LiveInfoList from 'components/LiveInfoList';

const Live: FC<PageProps> = () => {
  const { allDatoCmsSchedule } =
    useStaticQuery<GetLiveInfoPageContentQuery>(graphql`
      query GetLiveInfoPageContent {
        allDatoCmsSchedule(sort: { order: DESC, fields: heldOn }) {
          nodes {
            ...LiveInfoListItemField
          }
        }
      }
    `);

  return (
    <Layout>
      <Head title="Live" />
      <Container>
        <PageTitle>LIVE INFO</PageTitle>
        <LiveInfoList liveInfos={allDatoCmsSchedule.nodes} />
      </Container>
    </Layout>
  );
};

export default Live;
