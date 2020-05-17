import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const totalQty = 1;
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>My Store</h1>
        </Link>
      </div>
      <div>
        <Link className="ui button primary" to="cart">
          Cart: {totalQty}
        </Link>
      </div>
    </div>
  );
};

export default Header;
