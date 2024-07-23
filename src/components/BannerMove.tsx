import React, { useState, useRef, useEffect } from 'react';

export default function BannerMove({ dataValue }: { dataValue: Array<any> }) {
  const [bannerNum, setBannerNum] = useState(0);
  const banner = useRef<HTMLDivElement>(null);

  function bannerMove(type: string) {
    console.log('bannerNum:', bannerNum);
    const moveNum = type === 'left' ? bannerNum - 1 : bannerNum + 1;
    const marginValue = `${-moveNum * 100}%`;
    if (type === 'left') {
      if (moveNum >= 0) {
        if (banner.current) {
          banner.current.style.setProperty('margin-left', marginValue);
          setBannerNum(moveNum);
        }
      }
    } else if (type === 'right') {
      console.log('dataValue.length:', dataValue.length);
      console.log(moveNum);
      if (moveNum < dataValue.length) {
        if (banner.current) {
          banner.current.style.setProperty('margin-left', marginValue);
          setBannerNum(moveNum);
        }
      }
    }
  }

  return (
    <div className={'main-container clearfix'}>
      <div className={'banner-move'} ref={banner}>
        {dataValue.map((value: any) => (
          <div className={(value.class, 'banner')} key={value.class}>
            {value.content()}
          </div>
        ))}
      </div>
      <div className={'boundary-bg'} />
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
          <span>{'◀'}</span>
        </div>
        <div
          className={`arrow arrow-right ${
            bannerNum >= dataValue.length - 1 ? 'disabled' : ''
          }`}
          onClick={() => {
            bannerMove('right');
          }}
          onKeyDown={() => {
            bannerMove('right');
          }}
          role={'presentation'}>
          <span>{'▶'}</span>
        </div>
      </div>
    </div>
  );
}
