module.exports = {
  siteMetadata: {
    title: 'General Goods',
    description: 'General Goods オフィシャルウェブサイト',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'general-goods-official-website',
        acl: null,
      },
    },
  ],
};
