'use strict';

import React from 'react';

import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';

export const media = [
  {
    className: 'page-one',
    children: <Page1 />,
  },
  {
    className: 'page-two',
    children: <Page2 />,
  },
  {
    className: 'page-three',
    children: <Page3 />,
  },
];
