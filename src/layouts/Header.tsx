import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
  const handleSelect = (eventKey: unknown) => {
    console.log(eventKey);
  };
  return (
    <Navbar bg={'light'} fixed={'top'}>
      <Container className={'justify-content-end'}>
        <Nav onSelect={handleSelect}>
          <Nav.Link eventKey={1}>{'AboutMe'}</Nav.Link>
          <Nav.Link eventKey={2}>{'Skills'}</Nav.Link>
          <Nav.Link eventKey={2}>{'Project'}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
