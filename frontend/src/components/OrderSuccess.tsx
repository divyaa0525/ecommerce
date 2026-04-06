import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Order Placed Successfully</h2>
      <p>Your order has been confirmed.</p>

      <button onClick={() => navigate("/products")}>
        Go to Home
      </button>
    </div>
  );
};

export default OrderSuccess;