import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GetSiteMetadataQuery } from 'types/generated/graphql';
import favicon from 'images/favicon.ico';

type HeadProps = {
  pageTitle?: string;
};

const Head: React.FC<HeadProps> = ({ pageTitle }) => {
  const { site } = useStaticQuery<GetSiteMetadataQuery>(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <title>{pageTitle}</title>
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
  );
};

export default Head;
