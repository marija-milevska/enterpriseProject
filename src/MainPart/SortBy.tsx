import { Select } from "antd";
import React from "react";
import "./MainPart.css";

const SortBy = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      className="sort-by"
      defaultValue="author"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: "author", label: "Alphabetically by Author Name" },
        { value: "title", label: "Alphabetically by Title" },
        { value: "genre", label: "Alphabetically by Genre" },
      ]}
    />
  );
};

export default SortBy;
