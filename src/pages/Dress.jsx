import { Sales, SlideShow } from "../components";
import { allproducts, slideCon } from "../data/data";
import MainContent from "./MainContent";

const Dress = () => {
  return (
    <>
      <MainContent>
        <SlideShow slideCon={slideCon} />
        <Sales endpoint={allproducts} />
      </MainContent>
    </>
  );
};

export default Dress;
