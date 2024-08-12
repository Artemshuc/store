import React, { useState } from "react";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);

  const CountPrice = (data) => {
    setTotalPrice(Math.round(totalPrice + data.price));
    setItems([...items, data]);
  };

  const handleDelete = (index) => {
    const ItemToDelete = items[index]
    setTotalPrice(totalPrice - ItemToDelete.price)
    setItems(items.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <Header totalPrice={totalPrice} items={items} CountPrice={CountPrice} handleDelete={handleDelete}/>
      <BodyContainer CountPrice={CountPrice} />
    </div>
  );
}

export default App;
