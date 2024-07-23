import BannerMove from '../components/BannerMove';
import { myPortfolio, aboutMy, ElevatorFloorB1 } from '../utils/ProjectPage';

export default function ProjectPage() {
  const bannerData = [
    {
      class: 'banner3',
      content: ElevatorFloorB1,
    },
    {
      class: 'banner1',
      content: myPortfolio,
    },
    {
      class: 'banner2',
      content: aboutMy,
    },
    {
      class: 'banner4',
      content: aboutMy,
    },
    {
      class: 'banner5',
      content: aboutMy,
    },
  ];

  return (
    <div className={'mainWrap'}>
      <BannerMove dataValue={bannerData} />
    </div>
  );
}
