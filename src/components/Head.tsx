import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GetSiteMetadataQuery } from '../types/generated/graphql';

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
    <Helmet>
      <title>
        {pageTitle
          ? `${pageTitle} | ${site?.siteMetadata?.title}`
          : site?.siteMetadata?.title}
      </title>
    </Helmet>
  );
};

export default Head;
