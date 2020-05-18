import React from "react";
import PropTypes from "prop-types";
import { useAddItem, useDecreaseItem, useRemoveItem } from "../store";

const CartButtons = ({ item }) => {
  const add = useAddItem();
  const remove = useRemoveItem();
  const decrease = useDecreaseItem();
  return (
    <div className="ui buttons mini">
      <button onClick={() => decrease(item)} className="ui button">
        -
      </button>
      <button onClick={() => add(item)} className="ui button positive">
        +
      </button>
      <button onClick={() => remove(item)} className="ui button negative">
        x
      </button>
    </div>
  );
};

CartButtons.propTypes = {
  item: PropTypes.object,
};

export default CartButtons;
