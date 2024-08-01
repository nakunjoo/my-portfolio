import React, { useState, useRef, useEffect } from 'react';
import BannerMove from '../components/BannerMove';
import {
  aboutMy,
  mySkills,
  myProjects,
  ElevatorFloorB1,
  ElevatorFloorB2,
  ElevatorFloorB3,
} from '../utils/ContentsPage';
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
      content: ElevatorFloorB1,
    },
    {
      class: 'aboutMy',
      content: aboutMy,
    },
    {
      class: 'ElevatorFloorB1_2',
      content: ElevatorFloorB1,
    },
  ];
  const bannerDataB1 = [
    {
      class: 'ElevatorFloorB2_1',
      content: ElevatorFloorB2,
    },
    {
      class: 'mySkills',
      content: mySkills,
    },
    {
      class: 'ElevatorFloorB2_2',
      content: ElevatorFloorB2,
    },
  ];
  const bannerDataB2 = [
    {
      class: 'ElevatorFloorB3_1',
      content: ElevatorFloorB3,
    },
    {
      class: 'myProjects',
      content: myProjects,
    },
    {
      class: 'ElevatorFloorB3_2',
      content: ElevatorFloorB3,
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
