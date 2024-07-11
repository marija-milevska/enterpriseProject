import React from "react";
import { Col, Row, Typography } from "antd";
import "./Header.scss";

const Header = () => {
  const { Title } = Typography;
  return (
    <>
      <Row className="top-header-row" />
      <Row className="bottom-header-row">
        <Col span={24}>
          <Title level={2}>
            <span className="bottom-header-title-span">
              Frontend Developer Assignment
            </span>
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default Header;
