import { useNavigate } from 'react-router-dom';

export default function FloorSelect({ floor }: { floor: string }) {
  const navigate = useNavigate();
  const moveFloor = (select: string) => {
    console.log(select);
    if (select === '1') {
      navigate('/');
    } else if (select === '2') {
      navigate('/skills');
    } else {
      navigate('/projects');
    }
  };
  return (
    <div>
      {floor === 'B1' ? (
        <ul>
          <li
            onClick={() => {
              moveFloor('2');
            }}
            role={'presentation'}>
            <button type="button">2</button>
            <span>Skills</span>
          </li>
          <li
            onClick={() => {
              moveFloor('1');
            }}
            role={'presentation'}>
            <button type="button">1</button>
            <span>AboutMe</span>
          </li>
        </ul>
      ) : (
        <ul>
          <li
            onClick={() => {
              moveFloor('1');
            }}
            role={'presentation'}>
            <button type="button">1</button>
            <span>AboutMe</span>
          </li>
          <li
            onClick={() => {
              moveFloor('B1');
            }}
            role={'presentation'}>
            <button type="button">B1</button>
            <span>Projects</span>
          </li>
        </ul>
      )}
    </div>
  );
}
