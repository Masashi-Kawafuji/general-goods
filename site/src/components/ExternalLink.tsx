import { FC } from 'react';

type ExternalLinkProps = {
  url: string;
};

const ExternalLink: FC<ExternalLinkProps> = ({ url, children }) => (
  <a href={url} rel="noreferrer" target="_blank" className="text-darkest">
    {children}
  </a>
);

export default ExternalLink;
