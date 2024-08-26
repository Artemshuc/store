import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BodyContainer from "./components/BodyContainer";
import Layout from "./components/Layouts/Layout";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const CountPrice = (data) => {
    setTotalPrice(Math.round(totalPrice + data.price));
    setItems([...items, data]);
  };

  const handleDelete = (index) => {
    const ItemToDelete = items[index];
    setTotalPrice(totalPrice - ItemToDelete.price);
    setItems(items.filter((_, idx) => idx !== index));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Fetch all products initially
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        if (selectedCategory === "all") {
          setFilteredProducts(data);
        } else {
          fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          )
            .then((res) => res.json())
            .then((filteredData) => setFilteredProducts(filteredData))
            .catch((error) =>
              console.error("Error fetching products by category:", error)
            );
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  return (
    <div className="App">
      <Router>
        <Header
          totalPrice={totalPrice}
          items={items}
          handleDelete={handleDelete}
          handleCategorySelect={handleCategorySelect}
        />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            index
            element={
              <BodyContainer cards={filteredProducts} CountPrice={CountPrice} />
            }
          />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="Sign_in" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
