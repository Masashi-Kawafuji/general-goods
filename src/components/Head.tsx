import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

type HeadProps = {
  title: string;
};

type Site = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const { site } = useStaticQuery<Site>(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>
        {site.siteMetadata.title} - {title}
      </title>
    </Helmet>
  );
};

export default Head;
