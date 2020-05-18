import { useRecoilState } from "recoil";
import { cart } from "./atoms";

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({ ...item })),
  index: items.findIndex((item) => item.id === id),
});

export const useAddItem = () => {
  const [items, setItems] = useRecoilState(cart);
  return (product) => {
    const { clone, index } = cloneIndex(items, product.id);
    if (index !== -1) {
      clone[index].qty += 1;
      setItems(clone);
    } else {
      setItems([...clone, { ...product, qty: 1 }]);
    }
  };
};

export const useRemoveItem = () => {
	const [items, setItems] = useRecoilState(cart);
	return (product) => {
	  setItems(items.filter((item) => item.id !== product.id));
	};
  };
  
  export const useDecreaseItem = () => {
	const [items, setItems] = useRecoilState(cart);
	const removeItem = useRemoveItem();
	return (product) => {
	  const { clone, index } = cloneIndex(items, product.id);
	  if (clone[index].qty === 1) {
		removeItem(product);
	  } else {
		clone[index].qty -= 1;
		setItems(clone);
	  }
	};
  };
