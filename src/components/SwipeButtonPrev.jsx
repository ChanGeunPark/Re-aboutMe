import { useContext } from "react";
import { useSwiper } from "swiper/react";

export default function SwiperButtonPrev({ children, ...rest }) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slidePrev();
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
