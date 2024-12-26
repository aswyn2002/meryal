import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import Counter from "./Counter";

const CartSummary = ({ cart, setCart }) => {
  const totalValue = cart.reduce((acc, item) => acc + item.price, 0);

  const updateQuantity = (index, newQty) => {
    const updatedCart = [...cart];
    updatedCart[index].qty = newQty;
    updatedCart[index].price = newQty * 1350; // Update price based on new quantity
    setCart(updatedCart);
  };

  return (
    <div className="cartSummaryCard">
      <div className="cart-summary">
        <h3>
          <IoCartOutline />
          Cart Summary
        </h3>
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="table-cell-flex">
                  <IoTicketOutline style={{ color: "#9f3191" }} />
                  {item.ticket}
                </td>

                <td>
                  <Counter
                    value={item.qty}
                    setValue={(newQty) => updateQuantity(index, newQty)}
                  />
                </td>
                <td style={{ color: "#9f3191" }}>QAR {item.price} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-value">
        <h3 className="total-value-header">Total Cart Value</h3>
        <div className="total-value-details">
          <p>
            <span>Cart Value</span>
            <span>QAR {totalValue}</span>
          </p>
          <hr />
          <p>
            <span>Total</span>
            <span>QAR {totalValue}</span>
          </p>
        </div>
        <button className="continue-btn">
          Continue <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
