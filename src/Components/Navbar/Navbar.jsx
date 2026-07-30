import React, { useContext } from 'react';
import { ShopContext } from "../ShopContext/ShopContext";
import { BiCart, BiUser } from 'react-icons/bi';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { quantity } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>MyShop</h2>
        </Link>
    </div>

    <div className='link'>
      <ul>
        <li>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        HOME
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        PRODUCTS
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        CONTACT
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/AppPage"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        APP
      </NavLink>
    </li>
  </ul>
</div>

      <div className='nav_icon_wrapper'>
        <Link to="/cart">
          <div className="nav_cart">
            <BiCart className='nav_icon' />
            <p className='cart_qty'>{quantity}</p>
          </div>
        </Link>

        <Link to="/MyAccount">
          <BiUser className='nav_icon' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
