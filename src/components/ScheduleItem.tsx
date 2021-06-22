import React from 'react';
import { graphql } from 'gatsby';
import { ScheduleFieldsFragment } from '../types/generated/graphql';

type ScheduleItemProps = { schedule: ScheduleFieldsFragment };

export const SCHEDULE_FIELDS = graphql`
  fragment ScheduleFields on SchedulesJson {
    event
    date(formatString: "YYYY.MM.DD")
    venue
    venueUrl
  }
`;

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  schedule: { event, date, venue, venueUrl },
}) => (
  <li>
    <div className="flex px-3 py-6 space-x-6 sm:space-x-20 xl:space-x-32">
      <div className="flex flex-col justify-center">
        <p className="text-sm sm:text-xl font-semibold">{date}</p>
      </div>
      <dl>
        <dt className="text-sm sm:text-lg text-gray-200">{event}</dt>
        <dd className="">
          <a
            href={venueUrl || ''}
            className="text-xs sm:text-sm text-gray-400 hover:underline"
          >
            {venue}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block w-3.5 ml-1"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </span>
          </a>
        </dd>
      </dl>
    </div>
    <hr className="border-gray-400" />
  </li>
);

export default ScheduleItem;
