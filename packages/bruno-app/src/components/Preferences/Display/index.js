import React from 'react';
import Font from './Font/index';

const Display = ({ close }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="section-header">Display</div>
      <Font close={close} />
    </div>
  );
};

export default Display;
