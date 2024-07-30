import React, { useState } from "react";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const CountPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <div className="App">
      <Header totalPrice={totalPrice} />
      <BodyContainer CountPrice={CountPrice} />
    </div>
  );
}

export default App;
