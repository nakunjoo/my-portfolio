import { Icon } from '@iconify/react';
import Elevator from '../components/Elevator';

export const AboutMe = () => (
  <div className={'content-wrap'}>
    <div className={'container'}>
      <div className={'content'}>
        <h2>{'ABOUT ME'}</h2>
        <ul>
          <li>
            <h3>
              <Icon
                icon={'icon-park-outline:edit-name'}
                style={{ color: '#636363' }}
              />
              {'이름'}
            </h3>
            <p>{'나군주'}</p>
          </li>
          <li>
            <h3>
              <Icon icon={'foundation:mail'} style={{ color: '#636363' }} />
              {'이메일'}
            </h3>
            <p>{'nkj960822@gmail.com'}</p>
          </li>

          <li>
            <h3>
              <Icon icon={'mdi:address-marker'} style={{ color: '#636363' }} />
              {'주소지'}
            </h3>
            <p>{'서울특별시 은평구'}</p>
          </li>
          <li>
            <h3>
              <Icon icon={'subway:call'} style={{ color: '#636363' }} />
              {'연락처'}
            </h3>
            <p>{'010-4147-7756'}</p>
          </li>
          <li>
            <h3>
              <Icon
                icon={'solar:calendar-outline'}
                style={{ color: '#636363' }}
              />
              {'생년월일'}
            </h3>
            <p>{'1996/08/22'}</p>
          </li>
          <li>
            <h3>
              <Icon icon={'bi:github'} style={{ color: '#636363' }} />
              {'github'}
            </h3>
            <p>{'https://github.com/nakunjoo'}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const ElevatorFloorB1 = (array: string) => (
  <Elevator floor={'B1'} title={'About Me'} array={array} />
);
