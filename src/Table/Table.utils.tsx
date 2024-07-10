export const fetchBooksData = async () => {
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
