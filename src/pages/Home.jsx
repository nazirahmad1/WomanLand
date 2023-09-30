import { Sales, SlideShow } from "../components/";

import { bestsellers, allproducts, slideCon } from "../data/data";
// import Example from "../Example";
import MainContent from "./MainContent";
const Home = () => {
  return (
    <>
      <MainContent className="flex flex-col gap-16 relative">
        {/* <Example /> */}
        <SlideShow slideCon={slideCon} />
        <Sales endpoint={bestsellers} ifExists />
        <Sales endpoint={allproducts} />
      </MainContent>
    </>
  );
};

export default Home;
