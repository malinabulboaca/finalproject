import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Stupina from "./pages/stupina";
import Blog from "./pages/blog";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="min-vh-100">
      <Router>
        <Header />
        <Hero />

        <Routes>
          <Route index element={Home} />
          <Route path="/stupina" element={<Stupina />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
