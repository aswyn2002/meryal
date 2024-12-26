import React, { useState } from "react";
import TicketCard from "./components/TicketCard";
import CartSummary from "./components/CartSummary";

const App = () => {
  const [cart, setCart] = useState([]);
  const [ticketCount, setTicketCount] = useState(0);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.ticket === item.ticket
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty = item.qty;
      updatedCart[existingItemIndex].price = item.price;
      setCart(updatedCart);
    } else {
      // Add new item
      setCart([...cart, item]);
    }
  };

  return (
    <div className="app">
      <TicketCard
        addToCart={addToCart}
        count={ticketCount}
        setCount={setTicketCount}
      />
      <CartSummary cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
