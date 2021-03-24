import { Link } from 'gatsby';
import React from 'react';
import { Article } from '../types';

type NewsItemProps = Omit<Article, 'html'>;

const NewsItem: React.FC<NewsItemProps> = ({ id, excerpt, frontmatter }) => (
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
