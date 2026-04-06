import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import { useNavigate } from "react-router-dom";
import "./Home.css";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const images = [
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600"
];

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="hero-content">
          <h1 className="fade-text">GET YOUR FAVORITE PRODUCTS</h1>
          <p className="fade-text delay">Best deals available now</p>

          <button
            className="shop-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>

        {/* DOTS */}
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="section">
        <h2>Popular Products</h2>

        <div className="product-grid">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.imageUrl} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;