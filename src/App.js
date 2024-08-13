import React, { useState } from "react";
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

  const CountPrice = (data) => {
    setTotalPrice(Math.round(totalPrice + data.price));
    setItems([...items, data]);
  };

  const handleDelete = (index) => {
    const ItemToDelete = items[index];
    setTotalPrice(totalPrice - ItemToDelete.price);
    setItems(items.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <Router>
        <Header
          totalPrice={totalPrice}
          items={items}
          handleDelete={handleDelete}
        />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<BodyContainer CountPrice={CountPrice} />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="Sign_in" element={<SignIn />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
