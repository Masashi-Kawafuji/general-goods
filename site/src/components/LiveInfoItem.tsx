import { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { LiveInfoItemFieldFragment } from 'types/generated/graphql';
import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn';

export const LIVE_INFO_ITEM_FIELD = graphql`
  fragment LiveInfoItemField on DatoCmsSchedule {
    title
    venue {
      name
    }
    heldOn(formatString: "YYYY.MM.DD ddd")
    article {
      originalId
    }
  }
`;

type LiveInfoItemProps = {
  liveInfo: LiveInfoItemFieldFragment;
};

const LiveInfoItem: FC<LiveInfoItemProps> = ({
  liveInfo: { title, venue, heldOn, article },
}) => (
  <>
    <dt className="text-xl font-medium uppercase border-b-2 border-gray-400">
      {heldOn}
    </dt>
    <dd className="mb-12">
      <Link to={`/news/${article.originalId}/`}>
        <dl className="pt-3">
          <dt className="text-xl mb-2">{title}</dt>
          <dd className="text-sm text-darken font-light">
            <span>
              <MdLocationOn className="inline mr-1" />
            </span>
            {venue.name}
          </dd>
        </dl>
      </Link>
    </dd>
  </>
);

export default LiveInfoItem;
