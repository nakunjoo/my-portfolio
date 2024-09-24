import React, { useState, useRef, useEffect } from 'react';
import BannerMove from '../components/BannerMove';
import { myPortfolio, ElevatorFloor1 } from '../utils/MainPage';

import { preventScroll } from '../utils/ScrollEvent';

export default function MainPage() {
  useEffect(() => {
    if (window) {
      preventScroll();
    }
  }, []);
  const bannerData = [
    {
      class: 'myPortfolio',
      content: myPortfolio(),
    },
    {
      class: 'ElevatorFloor1',
      content: ElevatorFloor1(),
    },
  ];

  return (
    <div className={'mainWrap'}>
      <div className={'containerWrap'}>
        <BannerMove dataValue={bannerData} floor={'floor_1'} />
      </div>
    </div>
  );
}
