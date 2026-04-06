import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import OrderSuccess from "./components/OrderSuccess";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Success from "./components/Success";
function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        <Route path="/products" element={<ProductList />} />
        
        <Route
          path="/cart"
          element={
            isLoggedIn ? <CartList /> : <Navigate to="/login" />
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;