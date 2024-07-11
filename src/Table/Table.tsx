import React from "react";
import { Table } from "antd";
import { columns } from "./TableModel.tsx";
import "./Table.css";
import { Book } from "./Table.utils.tsx";

interface BooksTableProps {
  books: Book[];
  searchQuery: string;
}

const BooksTable: React.FC<BooksTableProps> = ({ books, searchQuery }) => {
  const getHighlightedText = (
    text: string | null | undefined,
    query: string
  ) => {
    if (!text || !query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return (
      <>
        {String(text)
          .split(regex)
          .map((part, index) =>
            regex.test(part) ? (
              <span key={index} style={{ fontWeight: "bold", color: "red" }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
      </>
    );
  };

  const boldColumns = columns.map((column) => ({
    ...column,
    render: (text) => getHighlightedText(text, searchQuery),
  }));

  return (
    <Table
      columns={boldColumns}
      className="table"
      dataSource={books.map((book) => ({
        ...book,
        key: book.id,
      }))}
    />
  );
};

export default BooksTable;
