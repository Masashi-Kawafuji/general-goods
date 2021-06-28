import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArticleItemFieldsFragment } from 'types/generated/graphql';

type ArticleItemProps = { article: ArticleItemFieldsFragment };

export const ARTICLE_ITEM_FIELDS = graphql`
  fragment ArticleItemFields on DatoCmsArticle {
    meta {
      firstPublishedAt(formatString: "YYYY.MM.DD")
    }
    originalId
    title
    excerpt
    featuredImage {
      gatsbyImageData
      alt
    }
  }
`;

const ArticleItem: React.FC<ArticleItemProps> = ({
  article: { meta, originalId, title, excerpt, featuredImage },
}) => (
  <div className="py-2">
    <Link to={`/news/${originalId}`}>
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        alt={featuredImage.alt}
      />
      <div className="my-2">
        <p className="text-xs text-darken">{meta.firstPublishedAt}</p>
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <div className="text-sm text-darken font-light">{excerpt}</div>
    </Link>
  </div>
);

export default ArticleItem;
