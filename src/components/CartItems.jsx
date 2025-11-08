import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from "../redux/CartSlice";

export default function CartItems({ onBack }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce((sum, i) => sum + i.cost * i.quantity, 0);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>🛒 Your Cart</h1>
      {cartItems.length === 0 ? <p>No items in cart</p> : (
        <>
          {cartItems.map((item, i) => (
            <div key={i} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <h3>{item.name}</h3>
              <p>${item.cost} x {item.quantity}</p>
              <div>
                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                <button onClick={() => dispatch(removeItem(item))}>Delete</button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalCost}</h2>
          <button onClick={() => alert("Coming Soon")} style={styles.checkout}>Checkout</button>
          <button onClick={onBack} style={styles.back}>Continue Shopping</button>
          <button onClick={() => dispatch(clearCart())} style={styles.clear}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

const styles = {
  card: { border: "1px solid #ccc", padding: 10, marginBottom: 10, borderRadius: 10 },
  image: { width: 100, height: 100, objectFit: "cover" },
  checkout: { padding: 10, margin: 10, backgroundColor: "#28a745", color: "white", border: "none", borderRadius: 5, cursor: "pointer" },
  back: { padding: 10, margin: 10, backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 5, cursor: "pointer" },
  clear: { padding: 10, margin: 10, backgroundColor: "#ffc107", color: "#000", border: "none", borderRadius: 5, cursor: "pointer" },
};
