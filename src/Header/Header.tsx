import React from "react";
import { Col, Row, Typography } from "antd";
import "./Header.css";

const Header = () => {
  const { Title } = Typography;
  return (
    <>
      <Row>
        <Col span={24} className="header-1"></Col>
      </Row>
      <Row>
        <Col span={24} className="header-2">
          <Title className="title"> Enterprise League</Title>
        </Col>
      </Row>
    </>
  );
};

export default Header;
