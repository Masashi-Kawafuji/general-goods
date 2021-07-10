import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GetSiteMetadataQuery } from 'types/generated/graphql';
import favicon from 'images/favicon.ico';

type HeadProps = {
  title?: string;
  description?: string;
};

const Head: React.FC<HeadProps> = ({ title, description }) => {
  const { site } = useStaticQuery<GetSiteMetadataQuery>(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      <meta
        name="description"
        content={description ?? site.siteMetadata.description}
      />
    </Helmet>
  );
};

export default Head;
