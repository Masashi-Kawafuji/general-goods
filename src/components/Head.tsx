/* eslint-disable no-restricted-globals */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GetSiteMetadataQuery } from 'types/generated/graphql';
import favicon from 'images/favicon.ico';

type HeadProps = {
  title?: string;
  description?: string;
  pathname?: string;
  ogType?: string;
  ogImageUrl?: string;
};

const Head: React.FC<HeadProps> = ({
  title,
  description,
  pathname,
  ogType,
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
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: 'icon',
          href: favicon,
        },
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
      ]}
      meta={[
        {
          name: 'description',
          content: description ?? site.siteMetadata.description,
        },
        {
          property: 'og:type',
          content: ogType ?? 'website',
        },
        {
          property: 'og:title',
          content: title ?? site.siteMetadata.title,
        },
        {
          property: 'og:url',
          content: canonicalUrl,
        },
        {
          property: 'og:description',
          content: description ?? site.siteMetadata.description,
        },
        {
          property: 'og:image',
          content: ogImageUrl ?? file.publicURL,
        },
        {
          property: 'og:locale',
          content: 'ja_JP',
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.title,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: site.siteMetadata.twitterUserName,
        },
      ]}
    />
  );
};

export default Head;
