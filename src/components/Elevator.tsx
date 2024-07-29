import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Elevator.scss';
import { useNavigate } from 'react-router-dom';
import { allowScroll, preventScroll } from '../utils/ScrollEvent';

export default function Elevator({ floor }: { floor: string }) {
  const navigate = useNavigate()

  function toggleDoor(type: string) {
    let scrollY = 0;
    console.log('floor:', floor);
    if (floor === '1') {
      const doorContainer = document.querySelector('.door-container');
      
        // eslint-disable-next-line
        doorContainer?.classList.add('open');
        setTimeout(()=>{
          doorContainer?.classList.remove('open');
        },2000)
        setTimeout(()=>{
          navigate('/contents')
        }, 4000)
      scrollY = 1838;
    } else {
      if (floor === 'B1') {
        scrollY = 1838;
      } else if (floor === 'B2') {
        if (type === 'up') {
          scrollY = 0;
        } else {
          scrollY = document.body.scrollHeight;
        }
      } else if (floor === 'B3') {
        scrollY = 1838;
      }
      allowScroll(scrollY);
      setTimeout(() => {
        preventScroll();
      }, 500);
    }
  }

  return (
    <div className={'elevator-bg clearfix'}>
      <Container>
        <div className={'door-bg clearfix'}>
          <div className={'floor'}>{floor}</div>
        </div>
        <div className={'door-shadow clearfix'}>
          <div className={'line line-left'} />
          <div className={'line line-right'} />
        </div>
        <div className={'door-container clearfix'}>
          <div className={"inside-container"}>
            <div className={"inside-top"}>
              <div className={"left"} />
              <div className={"right"} />
            </div>
            <div className={"inside-wall"}>
              <div className={"line line-left"} />
              <div className={"line line-right"} />
            </div>
            <div className={"inside-footer"}>
              <div className={"left"} />
              <div className={"right"} />
            </div>
          </div>
          <div className={'door door-left'} />
          <div className={'door door-right'} />
        </div>
        <div
          className={`buttonBox ${floor === '1' || floor === 'B1' ? 'up-disabled' : ''} ${
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
