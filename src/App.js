import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import CarouselImages from "./components/CarouselImages";
import Blog from "./pages/blog";
import Hero from "./components/hero/hero";
import "./index.css";
import Stupina from "./pages/stupina";

function App() {
  return (
    <div className="min-vh-100">
      <Router>
        <Header />
        <Hero />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stupina" element={<Stupina />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
