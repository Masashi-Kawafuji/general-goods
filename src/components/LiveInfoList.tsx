import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { LiveInfoListItemFieldFragment } from 'types/generated/graphql';
import LiveInfoItem from './LiveInfoItem';

export const LIVE_INFO_LIST_ITEM_FIELD = graphql`
  fragment LiveInfoListItemField on DatoCmsSchedule {
    originalId
    ...LiveInfoItemField
  }
`;

type LiveInfoListProps = {
  liveInfos: LiveInfoListItemFieldFragment[];
};

const LiveInfoList: FC<LiveInfoListProps> = ({ liveInfos }) => (
  <dl>
    {liveInfos.map((liveInfo) => (
      <LiveInfoItem key={liveInfo.originalId} liveInfo={liveInfo} />
    ))}
  </dl>
);

export default LiveInfoList;
