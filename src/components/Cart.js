import React from "react";
import CartButtons from "./CartButtons";

const Cart = () => {
  const cartItems = [
    { id: "apple", price: 1, qty: 2 },
    { id: "pear", price: 1, qty: 2 },
  ];
  const totalCost = 4;
  return (
    <table className="cart">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td className="actions">
              <CartButtons item={item} />
            </td>
            <td>{item.id}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>${item.qty * item.price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" style={{ textAlign: "right" }}>
            Total:
          </td>
          <td>${totalCost}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
