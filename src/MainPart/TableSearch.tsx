import { Space } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import "./MainPart.scss";

interface TableSearchProps {
  onSearch: (value: string) => void;
}

const TableSearch: React.FC<TableSearchProps> = ({ onSearch }) => {
  const handleSearch = (value: string) => {
    onSearch(value);
  };

  return (
    <div>
      <Space.Compact>
        <Search allowClear placeholder="Search" onSearch={handleSearch} />
      </Space.Compact>
    </div>
  );
};
export default TableSearch;
