
import style from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import type { JSX } from "react";
import CartIcon from "./CartIcon";


export default function NavBar(): JSX.Element {


  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listElement}><NavLink to="/" className={style.link}>Home
        </NavLink></li>
        <li className={style.listElement}><NavLink to="/products" className={style.link} >Products
        </NavLink></li>
        <li className={style.listElement}><NavLink to="/cart" end className={style.link}> Cart
        </NavLink></li>
        <li className={style.listElement}>
          <NavLink to="/test" className={style.link}>Test NotFound</NavLink>
        </li>
      </ul>
      <NavLink to="/cart" className={style.cartWrapper}>
        <CartIcon />
      </NavLink>
    </nav>
  );
}  