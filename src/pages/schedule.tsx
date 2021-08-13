import React, { FC } from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import ScheduleItem from 'components/ScheduleItem';
import { GetSchedulesQuery } from 'types/generated/graphql';

const Schedule: FC<PageProps> = () => {
  const { allDatoCmsSchedule } = useStaticQuery<GetSchedulesQuery>(graphql`
    query GetSchedules {
      allDatoCmsSchedule(sort: { order: DESC, fields: heldOn }) {
        nodes {
          id
          heldOn
          title
          venue {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Schedule" pathname="/schedule/" />
      <PageHero
        name="Schedule"
        image={
          <StaticImage
            src="../images/concert-1.jpg"
            alt="page hero"
            layout="fullWidth"
            className="h-full"
          />
        }
      />
      <Container>
        <ul>
          {allDatoCmsSchedule.nodes.map((schedule) => (
            <ScheduleItem key={schedule.id} schedule={schedule} />
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Schedule;
