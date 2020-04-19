import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>(
    <header>
        <div className="bar">
            <div className="barInner">
                <div className="barLogo alc">
                    <i className="fa fa-scribd"></i>
                </div>
                <div className="alc">
                    <div className="search">
                        <input type="text" name="" id="" />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="cart-icon">
                        <Link to="/cart">
                        <i className="fa">&#xf07a;</i>
                        {
                            (props.cart.length>0) ? <span className='badge badge-warning' id='lblCartCount'> {props.cart.length}</span> : ''
                        }
                        
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>);

export default Header;