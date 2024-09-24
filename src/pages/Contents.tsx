import React, { useState, useRef, useEffect } from 'react';
import BannerMove from '../components/BannerMove';
import { myProjects, ElevatorFloorB3 } from '../utils/ContentsPage';
import { AboutMe, ElevatorFloorB1 } from '../utils/Aboutme';
import { mySkills1, mySkills2, ElevatorFloorB2 } from '../utils/Skills';

import { preventScroll } from '../utils/ScrollEvent';

export default function ContentsPage() {
  useEffect(() => {
    if (window) {
      preventScroll();
    }
  }, []);
  const bannerData = [
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
  const bannerDataB1 = [
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
  const bannerDataB2 = [
    {
      class: 'ElevatorFloorB3_1',
      content: ElevatorFloorB3('left'),
    },
    {
      class: 'myProjects',
      content: myProjects(),
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
        <BannerMove dataValue={bannerDataB1} floor={'floor_2'} />
        <BannerMove dataValue={bannerDataB2} floor={'floor_3'} />
      </div>
    </div>
  );
}
