import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  const active = ({ isActive }) => (isActive ? "active" : "none");

  return (
    <>
      <header
        className={
          !navState
            ? "bg-white opacity-100 z-50 h-[8vh] flex items-center justify-center border"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav
          className="flex items-center justify-between my-container"
          role="navigation"
        >
          <div className="flex items-center ">
            <ul className="flex flex-row gap-5 text-blue-500">
              <NavLink to="/" className={active} end>
                Home
              </NavLink>
              <NavLink to="/dress" className={active} end>
                Dress
              </NavLink>
              <NavLink to="/shoes" className={active} end>
                Shoes
              </NavLink>
              <NavLink to="/bag" className={active} end>
                Bag
              </NavLink>
              <NavLink to="/beauty" className={active} end>
                Beauty
              </NavLink>
            </ul>
          </div>
          <ul className="flex items-center justify-center gap-2">
            <NavLink className="" to="/login">
              <span
                className={`icon-style text-blue-500 ${
                  navState && " transition-all duration-300"
                }`}
              >
                LOGIN
              </span>
            </NavLink>

            <li className="grid items-center ">
              <button
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                onClick={onCartToggle}
              >
                <ShoppingBagIcon
                  className={`icon-style text-blue-500 ${
                    navState && " transition-all duration-300"
                  }`}
                />
                <div
                  className={`bg-blue-500 absolute top-4 right-0  shadow w-4 h-4 text-[-.60rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "text-white text-white shadow-slate-900"
                      : "bg-blue-500 text-white shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
