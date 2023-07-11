import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import IndexCard from "./components/indexCard/IndexCard";
import Card from "./components/card/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/icard" element={<IndexCard />} />
          <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
