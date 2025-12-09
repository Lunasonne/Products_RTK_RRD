
import style from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import type { JSX } from "react";
import CartIcon from "./CartIcon";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectUser } from "../auth/selectors";
import { logout } from "../auth/authSlice";


export default function NavBar(): JSX.Element {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <nav className={style.navigation}>
      <ul className={style.list}> 
      <li className={style.listElement}><NavLink to="/" className={style.link}>Home </NavLink></li>
     
        {user ? (
          <>
            <li className={style.listElement}><NavLink to="/products" className={style.link} >Products
            </NavLink></li>
            <li className={style.listElement}><NavLink to="/cart" end className={style.link}> Cart
            </NavLink></li>
            <li className={style.listElement}>
              <NavLink to="/test" className={style.link}>Test NotFound</NavLink>
            </li>
            <li className={style.listElement}>
              <button
                className={style.logoutBtn}
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className={style.listElement}>
            <NavLink to="/login" className={style.link}>Login</NavLink>
          </li>
        )}
      </ul>
      {user && (
        <NavLink to="/cart" className={style.cartWrapper}>
          <CartIcon />
        </NavLink>
      )}
    </nav>
  );
}  