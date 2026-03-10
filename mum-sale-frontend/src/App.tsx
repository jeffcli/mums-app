import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NewOrderPage from "./pages/NewOrderPage";
import OrdersPage from "./pages/OrdersPage";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "1rem" }}>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <Link to="/">New Order</Link>
          <Link to="/orders">View Orders</Link>
        </nav>

        <Routes>
          <Route path="/" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
