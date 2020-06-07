import React from "react";
import CartButtons from "./CartButtons";
import { useRecoilValue } from "recoil";
import { cart, cartState } from "../store";

const Cart = () => {
  const cartItems = useRecoilValue(cart);
  const {
    totalCost,
    discountTotal,
    discountAmount,
    discountValue,
  } = useRecoilValue(cartState("diamond"));
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
            <td>${item.price}</td>
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
        {discountAmount > 0 && (
          <>
            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                Discount:
              </td>
              <td>
                -${discountAmount} ({discountValue * 100}%)
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                Discounted total:
              </td>
              <td>${discountTotal}</td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default Cart;
