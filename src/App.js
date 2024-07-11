import { Footer } from "antd/es/layout/layout";
import "./App.css";
import Header from "./Header/Header.tsx";
import MainPart from "./MainPart/MainPart.tsx";

function App() {
  return (
    <>
      <Header />
      <MainPart />
      <Footer className="footer">
        Created by Marija Milevska ©{new Date().getFullYear()}{" "}
      </Footer>
    </>
  );
}

export default App;
