import React from "react";
import { Table } from "antd";
import { columns } from "./TableModel.tsx";
import "./Table.css";

const BooksTable: React.FC = () => (
  <Table columns={columns} className="table" />
);

export default BooksTable;
