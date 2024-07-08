import { Space } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import React, { useState } from "react";
import "./MainPart.css";

const TableSearch = () => {
  return (
    <div>
      <Space.Compact className="table-search-input">
        <Search allowClear placeholder="Search" />
      </Space.Compact>
    </div>
  );
};
export default TableSearch;
