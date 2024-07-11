import { Select } from "antd";
import React from "react";
import "./MainPart.scss";

const SortBy = ({ setSortOption }) => {
  const handleChange = (value: string) => {
    setSortOption(value);
  };

  return (
    <Select
      className="sort-by"
      defaultValue="author"
      style={{ minWidth: 230 }}
      onChange={handleChange}
      options={[
        { value: "author", label: "Sort by Author Name" },
        { value: "title", label: "Sort by Title" },
        { value: "genre", label: "Sort by Genre" },
      ]}
    />
  );
};

export default SortBy;
