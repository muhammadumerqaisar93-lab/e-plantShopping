import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import CartItems from "./components/CartItems";
import Header from "./components/Header";

export default function App() {
  const [page, setPage] = useState("landing");

  const navigate = (to) => setPage(to);

  return (
    <Provider store={store}>
      {page !== "landing" && <Header onNavigate={navigate} />}
      {page === "landing" && <LandingPage onStart={() => navigate("products")} />}
      {page === "products" && <ProductList onViewCart={() => navigate("cart")} />}
      {page === "cart" && <CartItems onBack={() => navigate("products")} />}
    </Provider>
  );
}
