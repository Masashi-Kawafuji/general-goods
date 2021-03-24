import React from 'react';

const Container: React.FC = ({ children }) => (
  <div className="container mx-auto px-8 md:px-10 lg:px-24 xl:px-40">
    {children}
  </div>
);

export default Container;
