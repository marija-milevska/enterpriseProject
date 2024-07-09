import { Space } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import "./MainPart.css";

const TableSearch = () => {
  return (
    <div>
      <Space.Compact>
        <Search allowClear placeholder="Search" />
      </Space.Compact>
    </div>
  );
};
export default TableSearch;
