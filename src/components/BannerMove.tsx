import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function BannerMove({ dataValue, floor }: { dataValue: Array<any>; floor: string }) {
  const [bannerNum, setBannerNum] = useState(0);
  const banner = useRef<HTMLDivElement>(null);

  function bannerMove(type: string) {
    const moveNum = type === 'left' ? bannerNum - 1 : bannerNum + 1;
    const marginValue = `${-moveNum * 100}%`;
    if (banner.current) {
      if (type === 'left') {
        if (moveNum >= 0) {
          banner.current.style.setProperty('margin-left', marginValue);
          setBannerNum(moveNum);
        }
      } else if (type === 'right') {
        if (moveNum < dataValue.length) {
          banner.current.style.setProperty('margin-left', marginValue);
          setBannerNum(moveNum);
        }
      }
    }
  }

  return (
    <div className={`main-container clearfix ${floor}`}>
      <div className={'banner-move'} ref={banner}>
        {dataValue.map((value: any) => (
          <div className={`banner`} key={value.class}>
            {value.content}
          </div>
        ))}
      </div>
      <div className={'boundary-bg'} />
      <div className={'footer-bg'} />
      <div className={'banner-arrow'}>
        <div
          className={`arrow arrow-left ${bannerNum === 0 ? 'disabled' : ''}`}
          onClick={() => {
            bannerMove('left');
          }}
          onKeyDown={() => {
            bannerMove('left');
          }}
          role={'presentation'}>
          <Icon icon={'vaadin:level-left-bold'} />
        </div>
        <div
          className={`arrow arrow-right ${bannerNum >= dataValue.length - 1 ? 'disabled' : ''}`}
          onClick={() => {
            bannerMove('right');
          }}
          onKeyDown={() => {
            bannerMove('right');
          }}
          role={'presentation'}>
          <Icon icon={'vaadin:level-right-bold'} />
        </div>
      </div>
    </div>
  );
}
