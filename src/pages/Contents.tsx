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
      class: 'banner3',
      content: ElevatorFloorB1,
    },
    {
      class: 'banner1',
      content: aboutMy,
    },
    {
      class: 'banner3',
      content: ElevatorFloorB1,
    },
  ];
  const bannerDataB1 = [
    {
      class: 'banner3',
      content: ElevatorFloorB2,
    },
    {
      class: 'banner1',
      content: mySkills,
    },
    {
      class: 'banner3',
      content: ElevatorFloorB2,
    },
  ];
  const bannerDataB2 = [
    {
      class: 'banner3',
      content: ElevatorFloorB3,
    },
    {
      class: 'banner1',
      content: myProjects,
    },
    {
      class: 'banner3',
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
