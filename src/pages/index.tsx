import { Container, Row, Col } from 'react-bootstrap';

export default function MainPage() {
  return (
    <div className={'mainWrap'}>
      <div className={'bannerWrap'}>
        <div className={'bannerBg'} />
        <h1>{'PortFolio'}</h1>
      </div>
      <div className={'aboutWrap'}>
        <Container>
          <Row>
            <Col xl={4} gl={12} className={'title'}>
              <span>{'About Me'}</span>
            </Col>
            <Col xl={8} gl={12} className={'infoBox'}>
              <Row>
                <Col xl={4} gl={12}>
                  <span className={'subTitle'}>{'Name'}</span>
                  <span>{'나군주'}</span>
                </Col>
                <Col xl={4} gl={12}>
                  <span className={'subTitle'}>{'Birth'}</span>
                  <span>{'1996.08.22'}</span>
                </Col>
                <Col xl={4} gl={12}>
                  <span className={'subTitle'}>{'Address'}</span>
                  <span>{'서울시 은평구'}</span>
                </Col>
                <Col xl={4} gl={12}>
                  <span className={'subTitle'}>{'Phone'}</span>
                  <span>{'010.4147.7756'}</span>
                </Col>
                <Col xl={4} gl={12}>
                  <span className={'subTitle'}>{'Email'}</span>
                  <span>{'nkj960822@gmail.com'}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={'skillWrap'}>
        <h2>{'Skill'}</h2>
        <Container />
      </div>
    </div>
  );
}
