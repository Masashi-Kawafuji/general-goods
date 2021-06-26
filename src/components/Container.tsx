import React from 'react';

const Container: React.FC = ({ children }) => (
  <div className="container mx-auto max-w-screen-lg px-8">{children}</div>
);

export default Container;
