import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const count = props.showCount();
  return (
    <header>
      <div className="bar">
        <div className="barInner">
          <div className="barLogo alc">
            <Link to="/">
              <i className="fa fa-scribd" />
            </Link>
          </div>
          <div className="alc">
            <div className="search">
              <input
                type="text"
                name=""
                id=""
                placeholder="Type to search"
                onChange={props.searchItem}
              />
              <i className="fa fa-search" />
            </div>
            <div className="cart-icon">
              <Link to="/cart">
                <i className="fa">&#xf07a;</i>
                {count > 0 ? (
                  <span className="badge badge-warning" id="lblCartCount">
                    {" "}
                    {count}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
