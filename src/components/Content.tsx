'use strict';

import React, { Fragment } from 'react';

import Section from '../components/Section';
import ScrollIcon from '../components/ScrollIcon';

type Props = {
  main: JSX.Element;
  pageDown: boolean;
  backgroundColor: string;
};

const Content = ({ main, pageDown = false, backgroundColor }: Props) => {
  return (
    <Fragment>
      <Section backgroundColor={backgroundColor}>
        {main}
        {pageDown ? <ScrollIcon /> : null}
      </Section>
    </Fragment>
  );
};

export default Content;
