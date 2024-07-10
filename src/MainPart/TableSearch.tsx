import { Space } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import "./MainPart.css";

const TableSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <Space.Compact>
        <Search
          allowClear
          placeholder="Search"
          value={query}
          onChange={handleChange}
          onSearch={handleSearch}
        />
      </Space.Compact>
    </div>
  );
};
export default TableSearch;
