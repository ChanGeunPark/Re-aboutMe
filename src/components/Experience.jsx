import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-creative";
import { gsap } from "gsap/dist/gsap";
import { useContext, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import swiperCore, {
  Grid,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper";
import { experience } from "../data/myexperience";
import SwiperButtonPrev from "./SwipeButtonPrev";
import SwiperButtonNext from "./SwipeButtonNext";
import CustomCursorContext from "./CustomCursor/context/CustomCursorContext";

gsap.registerPlugin(ScrollTrigger);
export default function Experience() {
  const { setType } = useContext(CustomCursorContext);

  useEffect(() => {
    gsap.to(".years", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".years",
        start: "top 80%",
        toggleActions: "restart none none reverse",
      },
    }); //working years number

    gsap.fromTo(
      ".working span",
      {
        opacity: 0,
        translateX: -50,
      },
      {
        opacity: 1,
        delay: 0.1,
        translateX: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".years",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //working years text

    gsap.fromTo(
      ".experienceTitle",
      {
        opacity: 0,
        translateX: 50,
      },
      {
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceTitle

    gsap.fromTo(
      ".expImg1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceImg
    gsap.fromTo(
      ".expImg2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceImg

    gsap.fromTo(
      ".expTitle1",
      {
        translateX: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateX: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experiencetitle

    gsap.fromTo(
      ".expTitle2",
      {
        translateX: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateX: 0,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experiencetitle

    gsap.fromTo(
      ".expIntro1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceIntro

    gsap.fromTo(
      ".expIntro2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceIntro

    gsap.fromTo(
      ".expLink1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.7,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceLink

    gsap.fromTo(
      ".expLink2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: ".experienceTitle",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //experienceLink
  }, []);
  return (
    <article className="min-h-screen py-20 px-3 bg-[#28292D] relative mx-auto flex items-center experienceMain">
      <section className="container mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-row lg:flex-col lg:w-[200px] lg:mb-0 mb-3">
          <div className="flex items-start years opacity-0">
            <h1 className="text-white font-extrabold text-7xl">1.5</h1>
            <span className="font-extrabold text-3xl text-white ml-2">+</span>
          </div>
          <p className="working text-zinc-400 ml-3 lg:ml-0 lg:mt-2 leading-normal lg:leading-relaxed">
            <span className="relative">Years</span>
            <br />
            <span>Experience</span>
            <br />
            <span>Working</span>
          </p>
        </div>
        {/* left layout */}
        <div className="w-full lg:w-[calc(100%-200px)]">
          <div>
            <>
              <Swiper
                pagination={{
                  type: "fraction",
                  el: ".pagination_bullet",
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={30}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                    opacity: 0,
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                loop={true}
                //navigation={true}
                modules={[EffectCreative, Pagination]}
                className="myExperience !pt-28"
              >
                <div className="text-[#FFEEEE] font-extrabold text-4xl md:text-6xl flex justify-between items-center absolute top-0 left-0">
                  <div className="flex items-center experienceTitle">
                    <span className="text-[#28292D] about">MY</span>
                    <span className="ml-3">EXPERIENCE</span>

                    <span className="inline-block w-3 h-3 bg-white self-end rounded-full ml-2 -translate-y-2"></span>
                  </div>
                </div>
                <div className="text-white font-normal text-sm hidden sm:flex sm:flex-col lg:flex-row items-center space-x-2 absolute top-3 right-0">
                  <SwiperButtonPrev>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58.433"
                      height="11.87"
                      viewBox="0 0 58.433 11.87"
                      className="-translate-y-1/2 stroke-zinc-500"
                    >
                      <path
                        id="leftBtn"
                        data-name="leftBtn"
                        d="M1612.48,2023h57.226l-11.016,11.016"
                        transform="translate(1670.913 2034.37) rotate(180)"
                        fill="none"
                        strokeWidth="1"
                      />
                    </svg>
                  </SwiperButtonPrev>
                  <span className="pagination_bullet text-lg text-zinc-400 w-[40px] text-center">
                    {/* pagenation */}
                  </span>
                  <SwiperButtonNext>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58.433"
                      height="11.87"
                      viewBox="0 0 58.433 11.87"
                      className="translate-y-1/2 stroke-zinc-500"
                    >
                      <path
                        id="rightBtn"
                        data-name="rightBtn"
                        d="M1612.48,2023h57.226l-11.016,11.016"
                        transform="translate(-1612.48 -2022.5)"
                        fill="none"
                        strokeWidth="1"
                      />
                    </svg>
                  </SwiperButtonNext>
                </div>
                {/* navigation */}
                {experience.map((experience, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 rounded pb-9 border-b border-zinc-500">
                      <div className="h-[240px] relative overflow-hidden rounded-lg md:col-span-2 expImg1">
                        <img
                          src={experience.imgUrl1}
                          alt="이미지"
                          className="w-full h-full object-cover scale-105 transition-all duration-700 hover:scale-100"
                        />
                      </div>
                      <div className="md:col-span-4 flex flex-col h-full relative">
                        <div className="flex justify-between w-full">
                          <h2 className="text-white font-semibold text-xl expTitle1">
                            {experience.title1} <br />
                            {experience.title1_2}
                          </h2>
                          <span className="text-zinc-400 expDays1">
                            {experience.days1}
                          </span>
                        </div>
                        <p className="mt-6 text-zinc-400 leading-relaxed mb-12 md:mb-0 expIntro1">
                          {experience.intro1}
                          {/* 내용 */}
                        </p>
                        <div className="text-white space-x-9 mt-10 absolute left-0 bottom-0 expLink1">
                          {experience.siteUrl1 ? (
                            <a
                              href={experience.siteUrl1}
                              target="_blank"
                              onMouseOver={() => setType("link")}
                              onMouseOut={() => setType("default")}
                            >
                              VIEW SITE +
                            </a>
                          ) : (
                            ""
                          )}
                          {experience.githubUrl1 ? (
                            <a
                              href={experience.githubUrl1}
                              target="_blank"
                              onMouseOver={() => setType("link")}
                              onMouseOut={() => setType("default")}
                            >
                              GITHUB +
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 rounded pt-9 pb-3">
                      <div className="h-[240px] relative overflow-hidden rounded-lg md:col-span-2 expImg2">
                        <img
                          src={experience.imgUrl2}
                          alt="이미지"
                          className="w-full h-full  object-cover scale-105 transition-all duration-700 hover:scale-100"
                        />
                      </div>
                      <div className="md:col-span-4 flex flex-col h-full relative">
                        <div className="flex justify-between w-full">
                          <h2 className="text-white font-semibold text-xl expTitle2">
                            {experience.title2} <br />
                            {experience.title2_2}
                          </h2>
                          <span className="text-zinc-400 expDays2">
                            {experience.days2}
                          </span>
                        </div>
                        <p className="mt-6 text-zinc-400 leading-relaxed mb-12 md:mb-0 expIntro2">
                          {experience.intro2}
                          {/* 내용 */}
                        </p>
                        <div className="text-white space-x-9 mt-10 absolute left-0 bottom-0 expLink2">
                          {experience.siteUrl2 ? (
                            <a
                              href={experience.siteUrl2}
                              target="_blank"
                              onMouseOver={() => setType("link")}
                              onMouseOut={() => setType("default")}
                            >
                              VIEW SITE +
                            </a>
                          ) : (
                            ""
                          )}
                          {experience.githubUrl2 ? (
                            <a
                              href={experience.githubUrl2}
                              target="_blank"
                              onMouseOver={() => setType("link")}
                              onMouseOut={() => setType("default")}
                            >
                              GITHUB +
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1347.532"
        height="1047.281"
        viewBox="0 0 1347.532 1047.281"
        className="absolute opacity-5 right-0 top-1/2 -translate-y-1/2 translate-x-[25%] scale-90"
      >
        <path
          id="bgObject3"
          data-name="bgObject3"
          d="M1347.207,109.851C1341.788,55,1288.283,23.379,1239.642,8.787c-47.425-13.377-96.067-10.945-142.276,3.648-69.313,24.32-119.17,81.474-148.5,146a420.8,420.8,0,0,0-18.525,46.3,436.567,436.567,0,0,0-12.846,47.125c-8.608,24.459-28.094,41.483-51.335,51.928a259.166,259.166,0,0,1-39.938,12.583,255.771,255.771,0,0,1-41.933,5.889,298.371,298.371,0,0,1-44.028-1.423c-69.716-9.252-134.165-33.573-202.263-53.029C493.152,254.12,441.661,244.715,397.77,257.7a117.854,117.854,0,0,0-40.83,21.112c-20.807,15.746-34.184,37.635-40.264,61.955-16.214,67.9,4.729,139.168-18.1,202.559a146.594,146.594,0,0,1-19.6,37c-23.1,31.617-55.937,52.289-91.2,64.45-38.3,14.592-83.3,28.88-119.475,51.681a175.847,175.847,0,0,0-32.67,25.969C-23.812,784.613-1.923,884.327,50.366,945.129c109.442,125.251,324.679,139.843,437.317,18.587A219,219,0,0,0,510.734,932.8a221.278,221.278,0,0,0,17.531-35.1c27.969-70.529,43.777-155.651,112.746-198.311A286.974,286.974,0,0,1,685.09,676.07a232.74,232.74,0,0,1,47.468-14.276,431.233,431.233,0,0,1,63.007-7.145c103.752-4.308,201.849,25.575,304.019,32.6a248.433,248.433,0,0,0,57.159-2.7c57.058-9.462,110.867-39.786,129.108-98.156,8.512-29.185,4.864-62.017-15.809-85.122-43.777-46.209-98.5-86.338-113.132-151a74.218,74.218,0,0,1,5.587-40.267c5.784-13.284,15.548-26.469,30.225-39.373,14.63-15.473,31.879-30.209,49.78-44.319,35.8-28.221,86.4-43.074,99.936-77.958,5.5-15.142,5.471-27.388,4.769-38.508"
          transform="translate(0 0.001)"
          fill="#fff"
        />
      </svg>
      {/* background Image */}
      <img
        className="absolute left-0 top-1/3 -translate-x-1/4"
        src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/80a7f813-299c-44ee-73ca-b2fc4e69ca00/public"
        alt="background"
      />
    </article>
  );
}
