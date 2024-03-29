import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBhasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__oprionLineOne">Hello Guest</span>
            <span className="header__oprionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__oprionLineOne">Returns</span>
          <span className="header__oprionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__oprionLineOne">Your</span>
          <span className="header__oprionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBaasket">
            <ShopingBhasketIcon />
            <span className="header__oprionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
