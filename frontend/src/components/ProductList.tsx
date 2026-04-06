import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import { addToCart } from "../api/cartApi";
import "./Product.css";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [addedId, setAddedId] = useState<number | null>(null);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleAdd = (id: number) => {
    addToCart(id);
    setAddedId(id);

    setTimeout(() => setAddedId(null), 800);
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="container">
      <h2 className="title">Products</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="grid">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <div key={i} className="skeleton"></div>)
          : products
              .filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((p) => (
                <div key={p.id} className="card">

                  {/* Wishlist */}
                  <div
                    className="wishlist"
                    onClick={() => toggleWishlist(p.id)}
                  >
                    {wishlist.includes(p.id) ? "❤️" : "♡"}
                  </div>

                  {/* Image */}
                  <img src={p.imageUrl} alt={p.name} />

                  {/* Info */}
                  <div className="info">
                    <h3>{p.name}</h3>
                    <p className="desc">{p.description}</p>

                    {/* Rating */}
                    <div className="rating">
                      ★★★★☆
                    </div>

                    <div className="bottom">
                      <span className="price">₹ {p.price}</span>

                      <button
                        className={addedId === p.id ? "added" : ""}
                        onClick={() => handleAdd(p.id)}
                      >
                        {addedId === p.id ? "Added" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default ProductList;