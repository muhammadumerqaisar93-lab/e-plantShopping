import React from "react";
import { useSelector } from "react-redux";

export default function Header({ onNavigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={{ cursor: "pointer" }} onClick={() => onNavigate("products")}>🌿 Paradise Nursery</h2>
      <div style={{ cursor: "pointer" }} onClick={() => onNavigate("cart")}>
        🛒 Cart ({totalItems})
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#4caf50",
    color: "white",
    fontSize: "20px",
  },
};
