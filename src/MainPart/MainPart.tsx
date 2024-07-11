import React, { useEffect, useState } from "react";
import { Card, Col, Empty, Row, Typography } from "antd";
import BooksTable from "../Table/Table.tsx";
import TableSearch from "./TableSearch.tsx";
import SortBy from "./SortBy.tsx";
import "./MainPart.scss";
import { fetchBooksData } from "../Table/Table.utils.tsx";
import { Book } from "../Table/Table.utils.tsx";

const MainPart = () => {
  const { Title } = Typography;
  const [books, setBooks] = useState<Book[]>([]);
  const [sortOption, setSortOption] = useState("author");
  const [sortedBooks, setSortedBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await fetchBooksData();
      setBooks(booksData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredBooks = [...books];
    if (searchQuery) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sortedData = [...filteredBooks].sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "author") {
        return a.author.localeCompare(b.author);
      } else if (sortOption === "genre") {
        return a.genre.localeCompare(b.genre);
      }
      return 0;
    });
    setSortedBooks(sortedData);
  }, [sortOption, books, searchQuery]);

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
            <span> List of Books</span>
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
            <SortBy setSortOption={setSortOption} />
            <TableSearch onSearch={setSearchQuery} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          {sortedBooks.length > 0 ? (
            <BooksTable books={sortedBooks} searchQuery={searchQuery} />
          ) : (
            <Empty description="No results found" />
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default MainPart;
