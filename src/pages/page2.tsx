'use strict';

import React, { Fragment } from 'react';

import Page from '../components/Page';
import Content from '../components/Content';
import Img from '../components/Img';

import style from '../styles/contentsCenter.module.css';

import gorilla_2 from '../images/gorilla_2.png';

const Page2 = () => {
  const backgroundColor = '#1ba7a7';
  const contents1 = (
    <div className={style.contentsCenter}>
      <h2>ゴリラテスト</h2>
      <Img src={gorilla_2} width={30} />
    </div>
  );
  const contents2 = <Img src={gorilla_2} width={30} />;
  const contents = (
    <Fragment>
      <Content main={contents1} pageDown={true} backgroundColor={'#34dd8b'} />
      <Content main={contents2} pageDown={false} backgroundColor={'#30bd23'} />
    </Fragment>
  );
  return (
    <Page useSection={true} backgroundColor={backgroundColor}>
      {contents}
    </Page>
  );
};

export default Page2;
