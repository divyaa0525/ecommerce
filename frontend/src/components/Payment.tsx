import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [method, setMethod] = useState("CARD");
  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total || 0;

  const handlePayment = async () => {
    await fetch("http://localhost:8080/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalAmount: total,
        paymentMethod: method,
      }),
    });

    navigate("/success");
  };

  return (
    <div className="payment-container">

      {/* ORDER SUMMARY */}
      <div className="summary">
        <h3>Order Summary</h3>
        <p>Total Amount</p>
        <h2>₹ {total}</h2>
      </div>

      <h3>Choose a payment method</h3>

      {/* CARD */}
      <div
        className={`payment-box ${method === "CARD" ? "active" : ""}`}
        onClick={() => setMethod("CARD")}
      >
        <h4>Cards</h4>

        {method === "CARD" && (
          <div className="card-form">
            <input placeholder="Card Number" />
            <div className="row">
              <input placeholder="MM/YY" />
              <input placeholder="CVV" />
            </div>
            <input placeholder="Card Holder Name" />
          </div>
        )}
      </div>

      {/* UPI */}
      <div
        className={`payment-box ${method === "UPI" ? "active" : ""}`}
        onClick={() => setMethod("UPI")}
      >
        <h4>UPI</h4>

        {method === "UPI" && (
          <input placeholder="Enter UPI ID (example@upi)" />
        )}
      </div>

      {/* NET BANKING */}
      <div
        className={`payment-box ${method === "NETBANKING" ? "active" : ""}`}
        onClick={() => setMethod("NETBANKING")}
      >
        <h4>Net Banking</h4>

        {method === "NETBANKING" && (
          <div className="banks">
            <button>SBI</button>
            <button>ICICI</button>
            <button>HDFC</button>
            <button>Kotak</button>
          </div>
        )}
      </div>

      {/* PAY BUTTON */}
      <button className="pay-btn" onClick={handlePayment}>
        Proceed to Pay ₹ {total}
      </button>
    </div>
  );
};

export default Payment;