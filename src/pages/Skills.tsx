import BannerMove from '../components/BannerMove';
import { myPortfolio, aboutMy, ElevatorFloor2 } from '../utils/SkillPage';

export default function SkillPage() {
  const bannerData = [
    {
      class: 'banner3',
      content: ElevatorFloor2,
    },
    {
      class: 'banner1',
      content: myPortfolio,
    },
    {
      class: 'banner2',
      content: aboutMy,
    },
  ];

  return (
    <div className={'mainWrap'}>
      <BannerMove dataValue={bannerData} />
    </div>
  );
}
