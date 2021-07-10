require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'General Goods',
    description:
      '首都圏で活動する4人組ロックバンド、General Goods のオフィシャルウェブサイト。最新情報、ライブ情報などを掲載しています。',
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
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_ACCESS_TOKEN,
        environment: 'main',
        previewMode: process.env.NODE_ENV !== 'production',
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        },
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
