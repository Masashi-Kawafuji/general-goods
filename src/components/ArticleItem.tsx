import { graphql, Link } from 'gatsby';
import React from 'react';
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
  }
`;

const ArticleItem: React.FC<ArticleItemProps> = ({
  article: { meta, originalId, title, excerpt },
}) => (
  <div className="py-2">
    <Link to={`/news/${originalId}`}>
      <div className="mb-2">
        <p className="text-xs text-gray-400">{meta?.firstPublishedAt}</p>
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <div className="text-sm text-gray-300 font-light">{excerpt}</div>
    </Link>
  </div>
);

export default ArticleItem;
