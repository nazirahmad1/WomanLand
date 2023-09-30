import { Sales, SlideShow } from "../components";
import { bagpro, slideCon } from "../data/data";
import MainContent from "./MainContent";

const Bag = () => {
  return (
    <MainContent>
      <SlideShow slideCon={slideCon} />
      <Sales endpoint={bagpro} />
    </MainContent>
  );
};

export default Bag;
