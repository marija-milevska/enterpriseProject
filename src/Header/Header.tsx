import React from "react";
import { Col, Row, Typography } from "antd";
import "./Header.css";

const Header = () => {
  const { Title } = Typography;
  return (
    <>
      <Row className="header-1">
        <Col span={24}></Col>
      </Row>
      <Row className="header-2">
        <Col span={24}>
          <Title
            level={2}
            style={{
              fontSize: "24px",
              fontStyle: "italic",
              color: "#333",
              marginLeft: "20px",
            }}
          >
            Frontend Developer Assignment
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default Header;
