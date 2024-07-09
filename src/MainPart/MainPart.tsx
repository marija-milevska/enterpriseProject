import React from "react";
import { Card, Col, Row, Typography } from "antd";
import BooksTable from "../Table/Table.tsx";
import TableSearch from "./TableSearch.tsx";
import SortBy from "./SortBy.tsx";
import "./MainPart.css";

const MainPart = () => {
  const { Title } = Typography;
  return (
    <Card className="main-card">
      <Row
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
        className="first-row"
      >
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Title level={4} className="title">
            List of Books
          </Title>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="flex-end"
        >
          <div className="flex-container">
            <SortBy />
            <TableSearch />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <BooksTable />
        </Col>
      </Row>
    </Card>
  );
};

export default MainPart;
