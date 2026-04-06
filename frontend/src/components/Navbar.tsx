import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#333",
        color: "white",
      }}
    >
      {/* LEFT SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "none",
        }}
      />

      {/* CENTER TITLE */}
      <h2 style={{ margin: 0 }}>E-Commerce</h2>

      {/* RIGHT MENU */}
      <div>
        <Link
          to="/products"
          style={{ color: "white", marginRight: "15px" }}
        >
          Home
        </Link>

        <Link
          to="/cart"
          style={{ color: "white", marginRight: "15px" }}
        >
          Cart
        </Link>

        <span style={{ marginRight: "15px" }}>
          Welcome {username}
        </span>

        <button
          onClick={handleLogout}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;