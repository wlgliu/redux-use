import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/about";
import Home from "./pages/home"

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;