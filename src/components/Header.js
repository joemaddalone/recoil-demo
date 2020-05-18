import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { cartState } from '../store';

const Header = () => {
  const { totalQty } = useRecoilValue(cartState);
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
