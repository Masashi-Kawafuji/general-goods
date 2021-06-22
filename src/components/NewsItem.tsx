import { graphql, Link } from 'gatsby';
import React from 'react';
import { ArticleItemFieldsFragment } from 'types/generated/graphql';

type NewsItemProps = { article: ArticleItemFieldsFragment };

export const ARTICLE_ITEM_FIELDS = graphql`
  fragment ArticleItemFields on MarkdownRemark {
    excerpt
    id
    frontmatter {
      title
      date(formatString: "YYYY.MM.DD")
    }
  }
`;

const NewsItem: React.FC<NewsItemProps> = ({
  article: { id, excerpt, frontmatter },
}) => (
  <div className="py-2">
    <Link to={`/news/${id}`}>
      <div className="mb-2">
        <p className="text-xs text-gray-400">{frontmatter.date}</p>
        <p className="text-xl font-semibold">{frontmatter.title}</p>
      </div>
      <div className="text-sm text-gray-300 font-light">{excerpt}</div>
    </Link>
  </div>
);

export default NewsItem;
