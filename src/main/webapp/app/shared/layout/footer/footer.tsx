import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p>Created with ❤️ by Veverita Engineering with the help of <a href="https://www.jhipster.tech/">JHipster</a></p>
      </Col>
    </Row>
  </div>
);

export default Footer;
