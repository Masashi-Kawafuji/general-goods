import React from 'react';

type SocialLinkProps = {
  url: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ children, url }) => (
  <a
    href={url}
    rel="noreferrer"
    target="_blank"
    className="text-gray-300 transition-colors duration-300 hover:text-gray-50"
  >
    {children}
  </a>
);

export default SocialLink;
