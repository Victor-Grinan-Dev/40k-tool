import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import IndexCard from "./components/indexCard/IndexCard";
import MyModels from "./components/myModels/MyModels";
// import Card from "./components/card/Card";
import Grapharmy from "./pages/grapharmy/Grapharmy";
// import { creator } from "./data/creator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/icard" element={<IndexCard />} />
          <Route path="grapharmy" element={<Grapharmy />} />
          <Route path="mymodels" element={<MyModels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
