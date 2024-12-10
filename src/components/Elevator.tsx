import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Elevator.scss';
import { useNavigate } from 'react-router-dom';
import { allowScroll, preventScroll } from '../utils/ScrollEvent';

export default function Elevator({
  floor,
  title,
  arrow,
}: {
  floor: string;
  title: string;
  arrow: string;
}) {
  const navigate = useNavigate();

  function toggleDoor(type: string) {
    let scrollY = 0;

    if (floor === '1') {
      // const doorContainer = document.querySelector('.door-container');
      // // eslint-disable-next-line
      // doorContainer?.classList.add('open');
      // setTimeout(() => {
      //   doorContainer?.classList.remove('open');
      // }, 2000);
      // setTimeout(() => {
      //   navigate('/contents');
      // }, 4000);
      scrollY = document.body.offsetHeight * 2;
    } else if (floor === 'B1') {
      if (type === 'up') {
        scrollY = 0;
      } else {
        scrollY = document.body.offsetHeight * 4;
      }
    } else if (floor === 'B2') {
      if (type === 'up') {
        scrollY = document.body.offsetHeight * 2;
      } else {
        scrollY = document.body.offsetHeight * 6;
      }
    } else if (floor === 'B3') {
      scrollY = document.body.offsetHeight * 4;
    }
    allowScroll(scrollY);
    setTimeout(() => {
      preventScroll();
    }, 500);
  }

  return (
    <div className={'elevator-bg clearfix'}>
      {floor === '1' ? (
        <div className={'guideWrap'}>
          <div className={'guide'}>
            <ul>
              <li>{'B1. About Me'}</li>
              <li>{'B2. Skills'}</li>
              <li>{'B3. Projects'}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div />
      )}
      <div className={`titleWrap ${arrow}`}>
        <div className={`${arrow}`}>{title}</div>
      </div>
      <Container>
        <div className={'door-bg clearfix'}>
          <div className={'floor'}>{floor}</div>
        </div>
        <div className={'door-shadow clearfix'}>
          <div className={'line line-left'} />
          <div className={'line line-right'} />
        </div>
        <div className={'door-container clearfix'}>
          <div className={'inside-container'}>
            <div className={'inside-top'}>
              <div className={'left'} />
              <div className={'right'} />
            </div>
            <div className={'inside-wall'}>
              <div className={'line line-left'} />
              <div className={'line line-right'} />
            </div>
            <div className={'inside-footer'}>
              <div className={'left'} />
              <div className={'right'} />
            </div>
          </div>
          <div className={'door door-left'} />
          <div className={'door door-right'} />
        </div>
        <div
          className={`buttonBox ${floor === '1' ? 'up-disabled' : ''} ${
            floor === 'B3' ? 'down-disabled' : ''
          }`}>
          <button
            type={'button'}
            className={`button button-up`}
            onClick={() => {
              toggleDoor('up');
            }}>
            <span>{'▲'}</span>
          </button>
          <button
            type={'button'}
            className={'button button-down'}
            onClick={() => {
              toggleDoor('down');
            }}>
            <span>{'▼'}</span>
          </button>
        </div>
      </Container>
    </div>
  );
}
