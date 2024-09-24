import { Icon } from '@iconify/react';
import Elevator from '../components/Elevator';

export const myProjects = () => <div>{'project'}</div>;

export const ElevatorFloorB3 = (array: string) => (
  <Elevator floor={'B3'} title={'Projects'} array={array} />
);
