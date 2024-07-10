import React from "react";
import { Table } from "antd";
import { columns } from "./TableModel.tsx";
import "./Table.css";

interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
}

interface BooksTableProps {
  books: Book[];
}

const BooksTable: React.FC<BooksTableProps> = ({ books }) => {
  return <Table columns={columns} className="table" dataSource={books} />;
};

export default BooksTable;
