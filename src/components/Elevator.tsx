import { Container } from 'react-bootstrap';
import '../styles/Elevator.scss';
import { useNavigate } from 'react-router-dom';
import FloorSelect from './FloorSelect';

export default function Elevator({ floor }: { floor: string }) {
  const navigate = useNavigate()
  let doorOpen = false;

  function toggleDoor(type: string) {
    console.log('type:', type)
    const doorContainer = document.querySelector('.door-container');
    if (floor === '1') {
      if (type === 'up') {
        navigate('/skills')
      } else {
        navigate('/projects')
      }
    } else {
      doorOpen = !doorOpen;
      if (doorOpen) {
        // eslint-disable-next-line
        doorContainer?.classList.add('open');
      } else {
        doorContainer?.classList.remove('open');
      }
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
          <FloorSelect floor={floor}/>
          <div className={'door door-left'} />
          <div className={'door door-right'} />
        </div>
        <div className={'buttonBox'}>
          <button
            type={'button'}
            className={'button button-up'}
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
