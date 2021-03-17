import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  pageTitle?: string;
};

type Site = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
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
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>
          {site.siteMetadata.title}
          {pageTitle ? ` - ${pageTitle}` : ''}
        </title>
      </Helmet>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
