import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="my-container mb-[2rem] p-5">
        <Title title={title} />
        <div
          className={` grid items-center justify-items-center md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-3 xl:grid-cols-3 md:grid-cols-2}"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
