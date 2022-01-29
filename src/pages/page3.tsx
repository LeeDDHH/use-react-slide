'use strict';

import React from 'react';

import Page from '../components/Page';
import Img from '../components/Img';

import gorilla_3 from '../images/gorilla_3.png';

const Page3 = () => {
  const backgroundColor = '#2054bd';
  const contents = <Img src={gorilla_3} width={30} />;
  return (
    <Page useSection={false} backgroundColor={backgroundColor}>
      {contents}
    </Page>
  );
};

export default Page3;
