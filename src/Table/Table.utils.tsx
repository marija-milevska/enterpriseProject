export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

export const fetchBooksJSONData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/marija-milevska/enterpriseProject/main/public/books.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchBooksCSVData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/marija-milevska/enterpriseProject/main/public/books.csv"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch CSV data");
    }
    const csvText = await response.text();
    const parsedData = parseCSV(csvText);
    return parsedData;
  } catch (error) {
    console.error("Error fetching CSV data:", error);
    return [];
  }
};

const parseCSV = (csvText) => {
  try {
    const lines = csvText.split("\n");
    if (lines.length === 0) {
      throw new Error("CSV file is empty");
    }

    const headers = lines[0].split(",");
    const data = lines.slice(1).map((line, index) => {
      const values = line.split(",");
      const obj = {};
      headers.forEach((header, index) => {
        const value = values[index] ? values[index].trim() : "";
        obj[header.trim()] = value;
      });
      return obj;
    });

    return data;
  } catch (error) {
    console.error("Error parsing CSV:", error);
    return [];
  }
};

export const fetchBooksData = async () => {
  try {
    const jsonBooks = await fetchBooksJSONData();
    const csvBooks = await fetchBooksCSVData();

    const csvMap = new Map(csvBooks.map((book) => [book.id.toString(), book]));

    const mergedBooks = jsonBooks.map((book) => ({
      ...book,
      ...(csvMap.get(book.id.toString()) || {}),
    }));

    return mergedBooks;
  } catch (error) {
    console.error("Error merging books data:", error);
    return [];
  }
};
