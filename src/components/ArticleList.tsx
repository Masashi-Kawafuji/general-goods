import React, { FC } from 'react';
import { ArticleItemFieldsFragment } from 'types/generated/graphql';
import ArticleItem from './ArticleItem';

type ArticleListProps = {
  articles: ArticleItemFieldsFragment[];
};

const ArticleList: FC<ArticleListProps> = ({ articles }) => (
  <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 sm:gap-y-10">
    {articles.map((article) => (
      <ArticleItem key={article.originalId} article={article} />
    ))}
  </div>
);

export default ArticleList;
