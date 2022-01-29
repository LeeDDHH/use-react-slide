'use strict';

import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';

import {
  withNavigationHandlers,
  withNavigationContext,
} from 'react-awesome-slider/dist/navigation';

import { media } from '../contents/media';

const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }: any) => {
  return (
    <Slider
      animation="cubeAnimation"
      bullets={false}
      fillParent={true}
      infinite={false}
      media={media}
    />
  );
});
