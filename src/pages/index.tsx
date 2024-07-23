import BannerMove from '../components/BannerMove';
import { myPortfolio, aboutMy, ElevatorFloor1 } from '../utils/MainPage';

export default function MainPage() {
  const bannerData = [
    {
      class: 'banner1',
      content: myPortfolio,
    },
    {
      class: 'banner2',
      content: aboutMy,
    },
    {
      class: 'banner3',
      content: ElevatorFloor1,
    },
  ];

  return (
    <div className={'mainWrap'}>
      <BannerMove dataValue={bannerData} />
    </div>
  );
}
