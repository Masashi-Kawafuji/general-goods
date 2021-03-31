import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

type HeadProps = {
  title?: string;
};

type SiteQuery = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
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
        {title ? `${title} - ` : ''}
        {site.siteMetadata.title}
      </title>
    </Helmet>
  );
};

export default Head;
