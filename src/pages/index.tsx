import React, { useState, useRef, useEffect } from 'react';
import BannerMove from '../components/BannerMove';
import { myPortfolio, ElevatorFloor1 } from '../utils/MainPage';
import { AboutMe, ElevatorFloorB1 } from '../utils/Aboutme';
import { mySkills1, mySkills2, ElevatorFloorB2 } from '../utils/Skills';
import {
  myProject1,
  myProject2,
  myProject3,
  myProject4,
  myProject5,
  myProject6,
  myProjectPortfolio,
  ElevatorFloorB3,
} from '../utils/Projects';

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

  const bannerDataB1 = [
    {
      class: 'ElevatorFloorB1_1',
      content: ElevatorFloorB1('left'),
    },
    {
      class: 'aboutMy',
      content: AboutMe(),
    },
    {
      class: 'ElevatorFloorB1_2',
      content: ElevatorFloorB1('right'),
    },
  ];
  const bannerDataB2 = [
    {
      class: 'ElevatorFloorB2_1',
      content: ElevatorFloorB2('left'),
    },
    {
      class: 'mySkills_1',
      content: mySkills1(),
    },
    {
      class: 'mySkills_2',
      content: mySkills2(),
    },
    {
      class: 'ElevatorFloorB2_2',
      content: ElevatorFloorB2('right'),
    },
  ];
  const bannerDataB3 = [
    {
      class: 'ElevatorFloorB3_1',
      content: ElevatorFloorB3('left'),
    },
    {
      class: 'myProject_1',
      content: myProject1(),
    },
    {
      class: 'myProject_2',
      content: myProject2(),
    },
    {
      class: 'myProject_3',
      content: myProject3(),
    },
    {
      class: 'myProject_4',
      content: myProject4(),
    },
    {
      class: 'myProject_5',
      content: myProject5(),
    },
    {
      class: 'myProject_6',
      content: myProject6(),
    },
    {
      class: 'myProject_portfolio',
      content: myProjectPortfolio(),
    },
    {
      class: 'ElevatorFloorB3_2',
      content: ElevatorFloorB3('right'),
    },
  ];

  return (
    <div className={'mainWrap'}>
      <div className={'containerWrap'}>
        <BannerMove dataValue={bannerData} floor={'floor_1'} />
        <BannerMove dataValue={bannerDataB1} floor={'floor_B1'} />
        <BannerMove dataValue={bannerDataB2} floor={'floor_B2'} />
        <BannerMove dataValue={bannerDataB3} floor={'floor_B3'} />
      </div>
    </div>
  );
}
