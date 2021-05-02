import React, { ComponentProps } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import ScheduleItem from '../components/ScheduleItem';

type GetSchedulesQuery = {
  allSchedulesJson: {
    nodes: ComponentProps<typeof ScheduleItem>[];
  };
};

const Schedule: React.FC = () => {
  const { allSchedulesJson } = useStaticQuery<GetSchedulesQuery>(graphql`
    query {
      allSchedulesJson(sort: { order: ASC, fields: date }) {
        nodes {
          id
          event
          date(formatString: "YYYY.MM.DD")
          venue
          venueUrl
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Schedule" />
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
          {allSchedulesJson.nodes.map(
            ({ id, event, date, venue, venueUrl }) => (
              <ScheduleItem
                key={id}
                id={id}
                event={event}
                date={date}
                venue={venue}
                venueUrl={venueUrl}
              />
            )
          )}
        </ul>
      </Container>
    </Layout>
  );
};

export default Schedule;
