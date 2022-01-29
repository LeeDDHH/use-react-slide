'use strict';

import React from 'react';

type Props = {
  src: string;
  width?: number;
};

const Img = ({ src, width = 30 }: Props) => {
  const style = {
    width: `${width}vw`,
  };
  return <img src={src} style={style} />;
};

export default Img;
