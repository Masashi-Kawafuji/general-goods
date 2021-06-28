import React from 'react';

type SocialLinkProps = {
  url: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ children, url }) => (
  <a
    href={url}
    rel="noreferrer"
    target="_blank"
    className="text-darken transition-colors duration-300 hover:text-lighten"
  >
    {children}
  </a>
);

export default SocialLink;
