// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import '../css/Home.css';

function Home() {
  return (
    <>
      <h1>Academy Sandbox</h1>
      <h2>a place to practice</h2>
      <p>
        <img src="..\utils\images\yousef_ahmed.jpg" alt="Yousef" />
        <a href="/ashwin"> hi </a>
      </p>

      <Row>
        <Col>
          <Row>Ashwin</Row>
          <Row>Danielle</Row>
          <Row>Aaron</Row>
        </Col>

        <Col>
          <Row>Anthony</Row>
          <Row>Eesha</Row>
          <Row>Ellie</Row>
        </Col>

        <Col>
          <Row>Grace</Row>
          <Row>Jessica</Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
