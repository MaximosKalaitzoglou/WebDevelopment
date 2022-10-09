import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>

      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>

  );
}

export default App;
