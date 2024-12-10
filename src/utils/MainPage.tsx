import Elevator from '../components/Elevator';

export const myPortfolio = () => (
  <div className={'main-wrap'}>
    <div className={'container'}>
      <div className={'content'}>
        {'Welcome to my portfolio'}
        <p>{'(프론트엔드 개발자 나군주의 포트폴리오 입니다.)'}</p>
      </div>
    </div>
  </div>
);
export const ElevatorFloor1 = () => <Elevator floor={'1'} title={''} arrow={''} />;
