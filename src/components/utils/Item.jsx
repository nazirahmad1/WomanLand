import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { Link } from "react-router-dom";

const Item = ({
  ifExists,
  id,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const onAddTOCart = () => {
    const item = { id, title, text, img, shadow, price };
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  return (
    <>
      <div
        className={`relative  bg-white-100 border grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl p-3 w-full h-[60vh]`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <div
            className={`flex items-center ${
              ifExists ? "absolute top-5 right-0" : "justify-center"
            }`}
          >
            <Link to={`/productdetail/${id}`}>
              <img
                src={img}
                alt={`img/item-img/${id}`}
                className={` transitions-theme transition-theme  cursor-pointer ${
                  ifExists ? "h-auto w-60 lg:w-56 md:w-48 " : "h-36 w-64 "
                }`}
              />
            </Link>
          </div>
          <h1 className=" text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className=" filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="flex items-center text-black text-sm font-medium font-medium">
                ${price}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4 text-yellow-400" />
              <h1 className="md:text-sm font-normal ">{rating}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-blue-500  opacity-100 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200 "
              onClick={() => onAddTOCart()}
            >
              <ShoppingBagIcon className="icon-style text-white" />
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow shadow-slate-200 text-sm text-black"
              onClick={() => {
                onAddTOCart();
                onCartToggle();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
