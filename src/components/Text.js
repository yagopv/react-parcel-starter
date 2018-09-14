import React, { Fragment } from 'react';

const Text = () => {
  return (
    <Fragment>
      <span>{this.props.children}</span>;
    </Fragment>
  );
};

export default Text;
