import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import Counter from "./Counter";

const TicketCard = ({ addToCart, count, setCount }) => {
  const handleBuyNow = () => {
    addToCart({ ticket: "Three Month Pass", qty: count, price: count * 1350 });
  };

  return (
    <div className="ticket-card">
      <img
        src="https://bookings.wonderla.com/hyderabad/images/center_img.jpg"
        alt="Water Park"
        className="ticket-img"
      />
      <div className="ticket-details">
        <h3>Three Months Pass</h3>
        <div className="counter">
          <p>
            Select Number of Pass <MdOutlinePerson />
          </p>
          <Counter value={count} setValue={setCount} />
        </div>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span style={{ color: "black" }}>Total: </span>
            <span style={{ color: "#9f3191" }}>{count} x QAR 1350</span>
          </span>
          <span style={{ color: "blue" }}>QAR {count * 1350}</span>
        </p>
        <button onClick={handleBuyNow} className="buy-now-btn">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
