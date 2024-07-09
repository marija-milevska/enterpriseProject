import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { columns } from "./TableModel.tsx";
import "./Table.css";

interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
}

const BooksTable: React.FC = () => {
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/marija-milevska/enterpriseProject/main/public/books.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <Table columns={columns} className="table" dataSource={data} />;
};

export default BooksTable;
