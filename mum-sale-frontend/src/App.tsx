import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NewOrderPage from "./pages/NewOrderPage";
import OrdersPage from "./pages/OrdersPage";

function Layout() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      location.pathname === path
        ? "bg-slate-900 text-white"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              Mum Sale System
            </h1>
            <p className="text-xs text-slate-500">
              Cross country fundraiser orders
            </p>
          </div>

          <nav className="flex gap-2">
            <Link to="/" className={linkClasses("/")}>
              New Order
            </Link>
            <Link to="/orders" className={linkClasses("/orders")}>
              Orders
            </Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
