import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎉 Payment Successful</h1>
      <p>Your order has been placed successfully</p>

      <button onClick={() => navigate("/home")}>
        Go to Home
      </button>
    </div>
  );
};

export default Success;