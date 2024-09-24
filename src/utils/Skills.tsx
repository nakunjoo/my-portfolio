import Elevator from '../components/Elevator';
import Images from './Images';

export const mySkills1 = () => (
  <div className={'content-wrap'}>
    <div className={'container'}>
      <div className={'content'}>
        <h2>{'FRONTEND'}</h2>
        <img src={Images.HtmlImg} alt={'html'} />
      </div>
    </div>
  </div>
);

export const mySkills2 = () => (
  <div className={'content-wrap'}>
    <div className={'container'}>
      <div className={'content'}>
        <h2>{'BACKEND'}</h2>
      </div>
    </div>
  </div>
);

export const ElevatorFloorB2 = (array: string) => (
  <Elevator floor={'B2'} title={'Skills'} array={array} />
);
