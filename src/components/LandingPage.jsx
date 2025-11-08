import React from "react";

export default function LandingPage({ onStart }) {
  return (
    <div style={styles.container}>
      <h1>🌿 Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, where green meets serenity!</p>
      <p>
        Discover high-quality plants to beautify your home and purify your air.
      </p>
      <button style={styles.button} onClick={onStart}>
        Get Started
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: 100 },
  button: {
    marginTop: 20,
    padding: "15px 30px",
    fontSize: 20,
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};
