import BodyContainer from "./components/BodyContainer";

function App() {
  const cards = [
    {
      name: "Микроволновка",
      category: "Бытовая техника",
      price: 7000,
    },
    {
      name: "Холодильник",
      category: "Бытовая техника",
      price: 10000,
    },
    {
      name: "Плита",
      category: "Бытовая техника",
      price: 30000,
    },
    

  ];
  return (
  <BodyContainer cards={cards} />
  )
}

export default App;
