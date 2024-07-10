import React from "react";
import { Table } from "antd";
import { columns } from "./TableModel.tsx";
import "./Table.css";
import { Book } from "./Table.utils.tsx";

interface BooksTableProps {
  books: Book[];
}

const BooksTable: React.FC<BooksTableProps> = ({ books }) => {
  return <Table columns={columns} className="table" dataSource={books} />;
};

export default BooksTable;
