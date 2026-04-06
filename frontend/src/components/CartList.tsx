import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  productId: number;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const CartList = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const navigate = useNavigate();

  const fetchData = async () => {
    const cartRes = await fetch("http://localhost:8080/cart");
    const cartData = await cartRes.json();
    setCart(cartData);

    const productRes = await fetch("http://localhost:8080/products");
    const productData = await productRes.json();
    setProducts(productData);

    // calculate total
    let sum = 0;
    cartData.forEach((item: CartItem) => {
      const product = productData.find(
        (p: Product) => p.id === item.productId
      );
      if (product) {
        sum += product.price * item.quantity;
      }
    });

    setTotal(sum);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ❌ remove item
  const removeItem = async (id: number) => {
    await fetch(`http://localhost:8080/cart/remove/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  // ➕➖ update quantity
  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity < 1) return;

    await fetch(
      `http://localhost:8080/cart/update/${id}?quantity=${quantity}`,
      {
        method: "PUT",
      }
    );

    fetchData();
  };

  // 🚀 go to payment page
  const placeOrder = () => {
    navigate("/payment", {
      state: { total },
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => {
        const product = products.find(
          (p) => p.id === item.productId
        );

        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            {product && (
              <>
                {/* IMAGE */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                />

                {/* DETAILS */}
                <div style={{ flex: 1 }}>
                  <h4>{product.name}</h4>
                  <p>₹ {product.price}</p>

                  {/* QUANTITY */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* REMOVE */}
            <button
              onClick={() => removeItem(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
              }}
            >
              Remove
            </button>
          </div>
        );
      })}

      {/* TOTAL */}
      <h3>Total: ₹ {total}</h3>

      {/* PLACE ORDER */}
      <button
        onClick={placeOrder}
        style={{
          background: "green",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "6px",
          width: "100%",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CartList;