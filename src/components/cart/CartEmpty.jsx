import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import shoppingCart from "../../assets/shoppingCart.svg";

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={shoppingCart}
          alt="shoppingCart/img"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="button-theme bg-gradient-to-b from-sky-500 to-blue-500 shadow-lg shadow-blue-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
          onClick={onCartToggle}
        >
          <ArrowLeftIcon className="w-5 h-5  text-slate-900" />
          <span className="">Back To Shop</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
