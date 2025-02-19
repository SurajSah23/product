import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
