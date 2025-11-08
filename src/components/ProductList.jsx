import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  { name: "Aloe Vera", image: "    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo6rhRaF-a9LbnJufDZfhzIFpkHavkTExKQ&s.jpg", description: "Skin-friendly", cost: 10, category: "Indoor" },
  { name: "Snake Plant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTej6KSkKsnSQ2tCMcrxEueA5b4Zm7xmDFIVg&s", description: "Air purifier", cost: 15, category: "Indoor" },
  { name: "Peace Lily", image: "https://cdn.mos.cms.futurecdn.net/qYNPupRnspGWPF4886Z7hB-1600-80.jpg", description: "Blooms white flowers", cost: 12, category: "Indoor" },
  { name: "Cactus", image: "https://baghbani.pk/wp-content/uploads/2024/05/bunny-ear.jpg", description: "Low maintenance", cost: 8, category: "Outdoor" },
  { name: "Money Plant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5lwsNNjPBWJpzI85UPTDQUaVAw-kUKltSw&s", description: "Brings luck", cost: 20, category: "Outdoor" },
  { name: "Orchid", image: "https://cdn.arabianflora.com/uploads/product/AUG2025/PinkOrchidPlant41750750888388-1755154249483.webp", description: "Beautiful flowers", cost: 25, category: "Outdoor" },
];

export default function ProductList({ onViewCart }) {
  const dispatch = useDispatch();

  const [added, setAdded] = useState({});

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded({ ...added, [plant.name]: true });
  };

  const categories = [...new Set(plantsArray.map(p => p.category))];

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>🌿 Paradise Nursery Products</h1>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {plantsArray.filter(p => p.category === cat).map((plant, i) => (
              <div key={i} style={styles.card}>
                <img src={plant.image} alt={plant.name} style={styles.image} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>${plant.cost}</p>
                <button
                  style={{ ...styles.button, backgroundColor: added[plant.name] ? "grey" : "#28a745" }}
                  disabled={added[plant.name]}
                  onClick={() => handleAdd(plant)}
                >
                  {added[plant.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button style={styles.cartBtn} onClick={onViewCart}>🛒 View Cart</button>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #ccc", padding: 15, borderRadius: 10, width: 200 },
  image: { width: "100%", height: 120, objectFit: "cover" },
  button: { color: "white", border: "none", padding: "10px", borderRadius: 5, cursor: "pointer" },
  cartBtn: { marginTop: 20, padding: "10px 20px", fontSize: 16, borderRadius: 5, cursor: "pointer", backgroundColor: "#007bff", color: "white" },
};
