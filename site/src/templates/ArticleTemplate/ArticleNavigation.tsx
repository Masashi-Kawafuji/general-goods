import { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { IconType } from '@react-icons/all-files/lib';
import { VscArrowLeft } from '@react-icons/all-files/vsc/VscArrowLeft';
import { VscArrowRight } from '@react-icons/all-files/vsc/VscArrowRight';
import { ArticleNavigationFieldsFragment } from 'types/generated/graphql';
import mergeCssClassName from 'utils/mergeCssClassName';

export const ARTICLE_NAVIGATION_FIELDS = graphql`
  fragment ArticleNavigationFields on DatoCmsArticle {
    originalId
    title
  }
`;

type ArticleNavigationProps = {
  direction: 'prev' | 'next';
  article: ArticleNavigationFieldsFragment;
};

const ArticleNavigation: FC<ArticleNavigationProps> = ({
  direction,
  article: { originalId, title },
}) => {
  type NavigationElement = {
    direction: string;
    className: Partial<Record<'textAlignment' | 'flexDirection', string>>;
    ArrowIcon: IconType;
  };

  const elements: Record<
    ArticleNavigationProps['direction'],
    NavigationElement
  > = {
    prev: {
      direction: 'PREV',
      className: {
        textAlignment: 'text-left',
        flexDirection: 'flex-row',
      },
      ArrowIcon: VscArrowLeft,
    },
    next: {
      direction: 'NEXT',
      className: {
        textAlignment: 'text-right',
        flexDirection: 'flex-row-reverse',
      },
      ArrowIcon: VscArrowRight,
    },
  };

  const element = elements[direction];
  const { ArrowIcon, className } = element;

  return (
    <Link
      to={`/news/${originalId}`}
      className={mergeCssClassName('flex flex-1', ...Object.values(className))}
    >
      <ArrowIcon
        size="1.25rem"
        className={mergeCssClassName(
          'my-auto',
          direction === 'prev' ? 'mr-3' : 'ml-3'
        )}
      />
      <div>
        <p className="text-xs sm:text-sm mb-1 text-darken">
          {element.direction} ARTICLE
        </p>
        <p className="text-sm font-bold">{title}</p>
      </div>
    </Link>
  );
};

export default ArticleNavigation;
