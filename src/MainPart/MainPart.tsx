import React from "react";
import { Card, Col, Row, Typography } from "antd";
import BooksTable from "../Table/Table.tsx";
import TableSearch from "./TableSearch.tsx";
import SortBy from "./SortBy.tsx";
import "./MainPart.css";

const MainPart = () => {
  const { Title } = Typography;
  return (
    <Card>
      <Row className="first-row">
        <Col span={8} className="table-search-row">
          <TableSearch />
        </Col>
        <Col span={8}>
          <SortBy />
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <Title level={4}>List of books:</Title>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <BooksTable />
        </Col>
      </Row>
    </Card>
  );
};

export default MainPart;
