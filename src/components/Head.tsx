/* eslint-disable no-restricted-globals */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GetSiteMetadataQuery } from 'types/generated/graphql';
import favicon from 'images/favicon.ico';

type HeadProps = {
  title?: string;
  description?: string;
  type?: string;
  pathname?: string;
  ogImageUrl?: string;
};

const Head: React.FC<HeadProps> = ({
  title,
  description,
  type,
  pathname,
  ogImageUrl,
}) => {
  const { site, file } = useStaticQuery<GetSiteMetadataQuery>(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteURL
          twitterUserName
        }
      }
      file(relativePath: { eq: "fallback.png" }) {
        publicURL
      }
    }
  `);

  const canonicalUrl = site.siteMetadata.siteURL + (pathname ?? '');

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={canonicalUrl} />
      <title>{title}</title>
      <meta
        name="description"
        content={description ?? site.siteMetadata.description}
      />
      {/* Metadata for OGP */}
      <meta property="og:title" content={title ?? site.siteMetadata.title} />
      {type && <meta property="og:type" content={type} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:description"
        content={description ?? site.siteMetadata.description}
      />
      <meta property="og:image" content={ogImageUrl ?? file.publicURL} />
      <meta property="og:locale" content="ja_JP " />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      {/* Metadata for being shared by Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site.siteMetadata.twitterUserName} />
      <meta name="twitter:title" content={title ?? site.siteMetadata.title} />
      <meta
        name="twitter:description"
        content={description ?? site.siteMetadata.description}
      />
      <meta name="twitter:image" content={ogImageUrl ?? file.publicURL} />
    </Helmet>
  );
};

export default Head;
