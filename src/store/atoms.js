import { atom, atomFamily } from "recoil";

const getDiscount = (lvl) => {
  switch (lvl) {
    case "gold":
      return 0.05;
    case "diamond":
      return 0.1;
    default:
      return 0;
  }
};

export const cart = atom({
  key: "cart",
  default: [],
});

export const discount = atomFamily({
  key: "discount",
  default: (lvl) => getDiscount(lvl),
});
