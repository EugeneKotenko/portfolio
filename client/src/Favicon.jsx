import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from './assets/heart.png';

const Favicon = () => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
  );
};

export default Favicon;
