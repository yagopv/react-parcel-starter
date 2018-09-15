import React, { Fragment } from 'react';

const Text = ({ children }) => {
  return (
    <Fragment>
      <span>{children}</span>;
    </Fragment>
  );
};

export default Text;
