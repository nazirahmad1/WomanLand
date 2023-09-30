import { Sales, SlideShow } from "../components/";
import { shoespro, slideCon } from "../data/data";
import MainContent from "./MainContent";

const Shoes = () => {
  return (
    <MainContent>
      <SlideShow slideCon={slideCon} />
      <Sales endpoint={shoespro} />
    </MainContent>
  );
};

export default Shoes;
