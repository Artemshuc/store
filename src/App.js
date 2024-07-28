import React, { useState } from "react";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";
import cards from "./data/cards";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const CountPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <div className="App">
      <Header totalPrice={totalPrice} />;
      <BodyContainer cards={cards} CountPrice={CountPrice} />
    </div>
  );
}

export default App;
