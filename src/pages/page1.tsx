'use strict';

import React from 'react';

import Page from '../components/Page';

const Page1 = () => {
  const backgroundColor = '#1ba7a7';
  const contents = (
    <div>
      <h1>テスト</h1>
    </div>
  );
  return (
    <Page useSection={false} backgroundColor={backgroundColor}>
      {contents}
    </Page>
  );
};

export default Page1;
