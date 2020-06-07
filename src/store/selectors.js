import { selectorFamily } from "recoil";
import { cart, discount } from "./atoms";

export const cartState = selectorFamily({
  key: "cartState",
  get: (lvl = null) => ({ get }) => {
    const totalCost = get(cart).reduce((a, b) => a + b.price * b.qty, 0).toFixed(2);
    const totalQty = get(cart).reduce((a, b) => a + b.qty, 0);
	const discountValue = get(discount(lvl));
	const discountAmount = (totalCost * discountValue).toFixed(2);
    const discountTotal = (totalCost - discountAmount).toFixed(2);
    return {
      totalCost,
      totalQty,
      discountValue,
	  discountTotal,
	  discountAmount,
    };
  },
});


