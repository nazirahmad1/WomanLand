import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SlideShow = ({ slideCon: { title, fashionSlide } }) => {
  const splideOtions = {
    perPage: 1,
    perMov: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    pagination: false,
    breakpoints: {
      1200: { perPage: 1 },
      991: { perPage: 2 },
      768: { perPage: 2 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="my-container mb-11">
        <div className="mt-7">
          <Splide options={splideOtions}>
            {fashionSlide?.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative">
                  <div className="">
                    <img src={val.img} alt={`val.img/i`} className="relative" />
                    <div className=" absolute bottom-0 left-0 right-0 text-center text-slate-900 text-3xl p-2 bg-white opacity-[70%] sm:text-xl">
                      {val.title}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
