import React, { FC } from 'react';

type ExternalLinkProps = {
  url: string;
};

const ExternalLink: FC<ExternalLinkProps> = ({ url, children }) => (
  <a href={url} rel="noreferrer" target="_blank" className="text-darken">
    {children}
  </a>
);

export default ExternalLink;
