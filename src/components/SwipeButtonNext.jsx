import { useContext } from "react";
import { useSwiper } from "swiper/react";

export default function SwiperButtonNext({ children, ...rest }) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slideNext();
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
