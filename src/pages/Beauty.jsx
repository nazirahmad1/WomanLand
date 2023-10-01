import { Sales, SlideShow } from "../components";
import { beauty, slideCon } from "../data/data";
import MainContent from "./MainContent";

const Beauty = () => {
  return (
    <MainContent>
      <SlideShow slideCon={slideCon} />
      <Sales endpoint={beauty} />
    </MainContent>
  );
};

export default Beauty;
