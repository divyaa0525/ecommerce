export const addToCart = async (productId: number) => {
  await fetch("http://localhost:8080/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      quantity: 1,
    }),
  });
};