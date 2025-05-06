import { Icon } from '@iconify/react';
import Elevator from '../components/Elevator';
import Project from '../components/Project';
import Images from './Images';

const projectData = [
  {
    name: '동네공작소',
    // video: dongne,
    images: [
      {
        id: 'p1_img_1',
        src: Images.dongne1,
      },
      {
        id: 'p1_img_2',
        src: Images.dongne2,
      },
      {
        id: 'p1_img_3',
        src: Images.dongne3,
      },
      {
        id: 'p1_img_4',
        src: Images.dongne4,
      },
      {
        id: 'p1_img_5',
        src: Images.dongne5,
      },
      {
        id: 'p1_img_6',
        src: Images.dongne6,
      },
    ],
    content: [
      {
        id: 'p1_1',
        str: '아크릴 굿즈 전문 주문제작 업체 웹 사이트 리뉴얼',
      },
      {
        id: 'p1_2',
        str: 'Vue + Nodejs + MySQL을 이용하여 프론트 및 백엔드 개발 및 유지보수',
      },
      {
        id: 'p1_3',
        str: '포트원API를 사용하여 결제 연동과 웹훅 연동',
      },
      {
        id: 'p1_4',
        str: '우체국API를 사용하여 운송장번호 조회, 배송완료 체크',
      },
    ],
    tag: [
      {
        id: 'p1_tag_1',
        name: 'Vue',
      },
      {
        id: 'p1_tag_2',
        name: 'Nuxt',
      },
      {
        id: 'p1_tag_3',
        name: 'Vuex',
      },
      {
        id: 'p1_tag_4',
        name: 'NodeJS',
      },
      {
        id: 'p1_tag_5',
        name: 'MySQL',
      },
      {
        id: 'p1_tag_6',
        name: 'TypeORM',
      },
    ],
    site: [
      {
        type: '',
        url: 'https://dongne.cc',
      },
    ],
    git: [],
  },
  {
    name: '현대 자동차 UX Studio UX/HMI',
    // video: dongne,
    images: [
      {
        id: 'hd_img_1',
        src: Images.hd0,
      },
      {
        id: 'hd_img_2',
        src: Images.hd1,
      },
      {
        id: 'hd_img_3',
        src: Images.hd2,
      },
      {
        id: 'hd_img_4',
        src: Images.hd3,
      },
      {
        id: 'hd_img_5',
        src: Images.hd4,
      },
    ],
    content: [
      {
        id: 'hd_1',
        str: '도로 주행 시뮬레이션 게임 제작',
      },
      {
        id: 'hd_2',
        str: '언리얼로 제작한 도로 주행 시뮬레이션 게임과 연동되는 ivi기능 구현',
      },
      {
        id: 'hd_3',
        str: '언리얼 게임에서 서버로 보낸 데이터를 TCP Socket통신으로 ivi에 전송',
      },
      {
        id: 'hd_4',
        str: 'ivi 미디어, 설정 부분의 ui/ux 개발, zustand를 사용한 상태 관리',
      },
      {
        id: 'hd_5',
        str:
          '맵 이미지를 게임과 연동하기 위해서 16000*9000px 맵 이미지를 2D canvas를 사용하여 화면에 보이도록 설정',
      },
      {
        id: 'hd_6',
        str:
          '게임에서 socket통신으로 받은 회전값과 이동값이 바뀔때마다 맵을 다시그리며 내비게이션의 회전 및 이동 구현',
      },
    ],
    tag: [
      {
        id: 'hd_tag_1',
        name: 'React',
      },
      {
        id: 'hd_tag_2',
        name: 'Electron',
      },
      {
        id: 'hd_tag_3',
        name: 'Zustand',
      },
      {
        id: 'hd_tag_4',
        name: 'Tailwindcss',
      },
    ],
    site: [],
    git: [],
  },
  {
    name: 'Quelsuite',
    // video: dongne,
    images: [
      {
        id: 'ql_img_1',
        src: Images.ql0,
      },
      {
        id: 'ql_img_2',
        src: Images.ql1,
      },
      {
        id: 'ql_img_3',
        src: Images.ql2,
      },
      {
        id: 'ql_img_4',
        src: Images.ql3,
      },
    ],
    content: [
      {
        id: 'ql_1',
        str:
          'OPEN AI를 사용하여 모델, 의상을 학습시키고, 학습시킨 모델과 의상으로 입력된 프롬프트에 따라 이미지를 생성해주는 웹사이트',
      },
      {
        id: 'ql_2',
        str: 'nextjs page router를 사용한 프론트엔드 개발',
      },
      {
        id: 'ql_3',
        str:
          'OpenAI 를 사용하여 이미지 생성에 관한 프롬프트를 생성할수있도록 챗봇과 대화하는 기능 구현',
      },
      {
        id: 'ql_4',
        str: 'replicate에서 LoRa로 학습시킨 이미지를 전송하여 이미지 생성요청',
      },
      {
        id: 'ql_5',
        str:
          '이미지가 생성되는동안 socket통신을하여 이미지가 생성되는것을 프론트에서 실시간으로 확인',
      },
      {
        id: 'ql_6',
        str: '이미지 생성, 학습 시키는데 필요한 충전형 포인트 구현',
      },
    ],
    tag: [
      {
        id: 'ql_tag_1',
        name: 'React',
      },
      {
        id: 'ql_tag_2',
        name: 'NextJS',
      },
      {
        id: 'ql_tag_3',
        name: 'Redux',
      },
      {
        id: 'ql_tag_4',
        name: 'NestJS',
      },
      {
        id: 'ql_tag_5',
        name: 'Tailwindcss',
      },
      {
        id: 'ql_tag_5',
        name: 'MySQL',
      },
      {
        id: 'ql_tag_5',
        name: 'TypeORM',
      },
      {
        id: 'ql_tag_5',
        name: 'TypeScript',
      },
    ],
    site: [
      {
        type: '',
        url: 'https://quelsuite.com',
      },
    ],
    git: [],
  },
  {
    name: '장비대여 관리',
    // video: dongne,
    images: [
      {
        id: 'p2_img_1',
        src: Images.erp1,
      },
      {
        id: 'p2_img_2',
        src: Images.erp2,
      },
      {
        id: 'p2_img_3',
        src: Images.erp3,
      },
      {
        id: 'p2_img_4',
        src: Images.erp4,
      },
      {
        id: 'p2_img_5',
        src: Images.erp5,
      },
      {
        id: 'p2_img_6',
        src: Images.erp6,
      },
    ],
    content: [
      {
        id: 'p2_1',
        str: '장비대여 관리 전용 사이트',
      },
      {
        id: 'p2_2',
        str: 'NextJs + NestJs를 사용하여 프론트 및 백엔드 개발',
      },
      {
        id: 'p2_3',
        str: 'Swagger UI를 사용하여 url문서화 및 백엔드 테스트환경 구성',
      },
      {
        id: 'p2_4',
        str:
          '대여일과 정상장비 재고 수를 계산하여 대여 가능한 장비만 검색, 장비 기본금액을 기준으로 대여일 만큼 금액 계산',
      },
      {
        id: 'p2_5',
        str: '고객명과 고객번호를 기준으로 등록되었던 고객이라면 해당 고객의 이용내역 조회',
      },
      {
        id: 'p2_6',
        str: '개별 장비들의 QR코드를 생성하여 관리',
      },
    ],
    tag: [
      {
        id: 'p2_tag_1',
        name: 'React',
      },
      {
        id: 'p2_tag_2',
        name: 'NextJs',
      },
      {
        id: 'p2_tag_3',
        name: 'StyledComponents',
      },
      {
        id: 'p2_tag_4',
        name: 'Scss',
      },
      {
        id: 'p2_tag_5',
        name: 'NodeJs',
      },
      {
        id: 'p2_tag_6',
        name: 'NestJs',
      },
      {
        id: 'p2_tag_7',
        name: 'MySQL',
      },
      {
        id: 'p2_tag_8',
        name: 'TypeORM',
      },
      {
        id: 'p2_tag_9',
        name: 'Swagger',
      },
    ],
    site: [],
    git: [],
  },
  {
    name: 'Schedule Calendar',
    // video: dongne,
    images: [
      {
        id: 'p3_img_1',
        src: Images.calendar1,
      },
      {
        id: 'p3_img_2',
        src: Images.calendar2,
      },
      {
        id: 'p3_img_3',
        src: Images.calendar3,
      },
      {
        id: 'p3_img_4',
        src: Images.calendar4,
      },
    ],
    content: [
      {
        id: 'p3_1',
        str: '일정을 기록할 수 있는 Calendar 구현',
      },
      {
        id: 'p3_2',
        str: 'Calendar와 DatePicker Module을 사용하지 않고 제작',
      },
      {
        id: 'p3_3',
        str: 'IndexedDB를 사용한 데이터 저장과 Redux로 상태관리',
      },
      {
        id: 'p3_4',
        str: '공공데이터포털 Open API를 사용하여 공휴일, 기념일, 음력 데이터 조회',
      },
    ],
    tag: [
      {
        id: 'p3_tag_1',
        name: 'React',
      },
      {
        id: 'p3_tag_2',
        name: 'Next',
      },
      {
        id: 'p3_tag_3',
        name: 'Redux',
      },
      {
        id: 'p3_tag_4',
        name: 'TypeScript',
      },
      {
        id: 'p3_tag_5',
        name: 'Tailwind',
      },
      {
        id: 'p3_tag_6',
        name: 'IndexedDB',
      },
    ],
    site: [
      {
        type: '',
        url: 'https://calendars-dot-teak-banner-431004-n3.du.r.appspot.com',
      },
    ],
    git: [
      {
        type: '',
        url: 'https://github.com/nakunjoo/schedule-calendar',
      },
    ],
  },
  {
    name: 'Movie Theater',
    images: [
      {
        id: 'p4_img_1',
        src: Images.movieTheater1,
      },
      {
        id: 'p4_img_2',
        src: Images.movieTheater2,
      },
      {
        id: 'p4_img_3',
        src: Images.movieTheater3,
      },
      {
        id: 'p4_img_4',
        src: Images.movieTheater4,
      },
      {
        id: 'p4_img_5',
        src: Images.movieTheater5,
      },
      {
        id: 'p4_img_6',
        src: Images.movieTheater6,
      },
      {
        id: 'p4_img_7',
        src: Images.movieTheater7,
      },
      {
        id: 'p4_img_8',
        src: Images.movieTheater8,
      },
      {
        id: 'p4_img_9',
        src: Images.movieTheater9,
      },
    ],
    content: [
      {
        id: 'p4_1',
        str: '영화관 시스템 관리 프로젝트',
      },
      {
        id: 'p4_2',
        str: '상영관 좌석배치, 상영영화 등록 등의 기능을 구현',
      },
      {
        id: 'p4_3',
        str: 'nestjs와 typeorm을 사용하여 backend제작',
      },
      {
        id: 'p4_4',
        str: 'aws를 이용한 db서버 구축',
      },
    ],
    tag: [
      {
        id: 'p4_tag_1',
        name: 'React',
      },
      {
        id: 'p4_tag_2',
        name: 'Next',
      },
      {
        id: 'p4_tag_3',
        name: 'Redux',
      },
      {
        id: 'p4_tag_4',
        name: 'TypeScript',
      },
      {
        id: 'p4_tag_5',
        name: 'Tailwind',
      },
      {
        id: 'p4_tag_6',
        name: 'MySQL',
      },
      {
        id: 'p4_tag_7',
        name: 'NestJs',
      },
      {
        id: 'p4_tag_8',
        name: 'TypeORM',
      },
      {
        id: 'p4_tag_9',
        name: 'Swagger',
      },
    ],
    site: [
      {
        type: 'production',
        url: 'https://movie-theater-dot-teak-banner-431004-n3.du.r.appspot.com',
      },
      {
        type: 'admin',
        url: 'https://movie-theater-dot-teak-banner-431004-n3.du.r.appspot.com/manager',
      },
    ],
    git: [
      {
        type: 'Front',
        url: 'https://github.com/nakunjoo/movie-theater_front',
      },
      {
        type: 'Back',
        url: 'https://github.com/nakunjoo/movie-theater_server',
      },
    ],
  },
  {
    name: 'My Portfolio',
    // video: dongne,
    images: [
      {
        id: 'pf_img_1',
        src: Images.portfolio1,
      },
      {
        id: 'pf_img_2',
        src: Images.portfolio2,
      },
      {
        id: 'pf_img_3',
        src: Images.portfolio3,
      },
      {
        id: 'pf_img_4',
        src: Images.portfolio4,
      },
      {
        id: 'pf_img_5',
        src: Images.portfolio5,
      },
    ],
    content: [
      {
        id: 'pf_1',
        str: 'React + TypeScript를 사용한 포트폴리오 사이트',
      },
      {
        id: 'pf_2',
        str: 'gcloud를 통한 배포',
      },
    ],
    tag: [
      {
        id: 'pf_tag_1',
        name: 'React',
      },
      {
        id: 'pf_tag_2',
        name: 'TypeScript',
      },
      {
        id: 'pf_tag_3',
        name: 'GCloud',
      },
      {
        id: 'pf_tag_4',
        name: 'Scss',
      },
    ],
    site: [
      {
        type: '',
        url: 'https://teak-banner-431004-n3.du.r.appspot.com',
      },
    ],
    git: [
      {
        type: '',
        url: 'https://github.com/nakunjoo/my-portfolio',
      },
    ],
  },
];

export const myProject1 = () => <Project data={projectData[0]} />;

export const myProject2 = () => <Project data={projectData[1]} />;

export const myProject3 = () => <Project data={projectData[2]} />;

export const myProject4 = () => <Project data={projectData[3]} />;

export const myProject5 = () => <Project data={projectData[4]} />;

export const myProject6 = () => <Project data={projectData[5]} />;

export const myProjectPortfolio = () => <Project data={projectData[6]} />;

export const ElevatorFloorB3 = (arrow: string) => (
  <Elevator floor={'B3'} title={'Projects'} arrow={arrow} />
);
