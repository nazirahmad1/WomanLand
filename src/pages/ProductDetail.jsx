import { useParams } from "react-router-dom";
import Item from "../components/utils/Item";

const ProductDetail = ({ item }) => {
  const param = useParams();
  const id = param.id;
  return (
    <div className="w-[80%] h-screen flex  md:h-[25rem] mx-auto  sm:flex-col  sm:h-[30rem] p-3 sm:w-[100%]">
      <button
        className="border-2 border-blue-500 p-2 rounded-md w-[4rem] h-[2rem] my-2 flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white"
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <Item item={item} />
    </div>
  );
};

export default ProductDetail;
