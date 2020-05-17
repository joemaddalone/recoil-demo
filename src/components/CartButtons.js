import React from "react";
import PropTypes from "prop-types";

const CartButtons = ({ item }) => {
  const add = (item) => console.log("add", item);
  const remove = (item) => console.log("remove", item);
  const decrease = (item) => console.log("decrease", item);
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
