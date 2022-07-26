import { cls } from "../ilbs/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../routes/Home";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Headers() {
  const [open, setOpen] = useState(false); //메뉴오픈
  const menuOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const homeScroll = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "power3.out",
      scrollTo: 0,
    });
  };

  const aboutMeScroll = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "power3.out",
      scrollTo: ".aboutMeMain",
    });
  };

  const experienceScroll = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "power3.out",
      scrollTo: ".experienceMain",
    });
  };

  const storyScroll = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "power3.out",
      scrollTo: ".storyMain",
    });
  };

  const contactMeScroll = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "power3.out",
      scrollTo: "#contactMeMain",
    });
  };

  return (
    <div className="w-full top-0 left-0 z-50 px-3 fixed h-0">
      <section className="container flex items-center h-[80px] mx-auto justify-between relative z-50">
        <h1 className="text-3xl text-white flex c items-center mainLogo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="131.298"
              height="41.579"
              viewBox="0 0 131.298 41.579"
              className="mix-blend-difference fill-white"
            >
              <path
                id="패스_41"
                data-name="패스 41"
                d="M14.308,30.361C9.574,30.382,6.439,34,6.439,40.419c0,6.565,3.177,10.037,7.827,10.058,3.472-.021,6.081-1.915,6.691-5.218l6.4.042c-.694,5.639-5.429,10.773-13.172,10.773C6.039,56.074,0,50.33,0,40.419c0-9.952,6.144-15.655,14.182-15.655,7.028,0,12.33,4.019,13.172,11.026h-6.4c-.5-3.367-3.093-5.408-6.649-5.429"
                transform="translate(0 -14.494)"
              />
              <path
                id="패스_42"
                data-name="패스 42"
                d="M80.567,25.832H86.88V38.456h13.214V25.832h6.355V56.3h-6.355V43.675H86.88V56.3H80.567Z"
                transform="translate(-48.795 -15.141)"
              />
              <path
                id="패스_43"
                data-name="패스 43"
                d="M154.839,56.3,165.4,25.832h8.122L184.044,56.3h-6.775l-2.294-7.028H163.95L161.656,56.3Zm18.537-11.951-3.808-11.657h-.211l-3.808,11.657Z"
                transform="translate(-93.777 -15.141)"
              />
              <path
                id="패스_44"
                data-name="패스 44"
                d="M263.065,56.3h-5.471L244.211,36.942h-.252V56.3h-6.313V25.832H243.2L256.5,45.19h.295V25.832h6.27Z"
                transform="translate(-143.928 -15.141)"
              />
              <path
                id="패스_45"
                data-name="패스 45"
                d="M315.118,89.724a3.455,3.455,0,0,1,3.535-3.493,3.511,3.511,0,0,1,3.493,3.493,3.548,3.548,0,0,1-3.493,3.535,3.49,3.49,0,0,1-3.535-3.535"
                transform="translate(-190.847 -51.721)"
              />
              <path
                id="합치기_1"
                data-name="합치기 1"
                d="M1.992,7.943H.784a.783.783,0,0,1-.71-1.115L3.054.452a.784.784,0,0,1,1.42,0l2.98,6.376a.783.783,0,0,1-.71,1.115H5.731a1.959,1.959,0,0,1-3.738,0Z"
                transform="translate(71.923 0.504)"
                fill="#fff"
                stroke="rgba(0,0,0,0)"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
              <path
                id="패스_48"
                data-name="패스 48"
                d="M177.033,36.037l9.7,26.443H167.338Z"
                transform="translate(-101.346 -21.322)"
                fill="#fff"
                opacity="0.554"
              />
              <rect
                id="사각형_6"
                data-name="사각형 6"
                width="19.392"
                height="26.443"
                transform="translate(65.991 14.715)"
                fill="none"
              />
              <rect
                id="사각형_7"
                data-name="사각형 7"
                width="131.298"
                height="41.076"
                transform="translate(0 0.504)"
                fill="none"
              />
              <rect
                id="사각형_8"
                data-name="사각형 8"
                width="131.298"
                height="41.076"
                transform="translate(0 0.504)"
                fill="none"
              />
            </svg>
            {/* LOGO */}
          </a>
          <span className="text-white text-sm font-normal ml-16 opacity-60 translate-y-1 hidden sm:block">
            design795@naver.com
          </span>
        </h1>

        <button type="button" onClick={menuOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* MENU BUTTON */}
      </section>
      <div
        className={cls(
          "w-full sm:w-[450px] opacity-0 h-screen fixed right-0 top-0 bg-[#101010] p-12 flex items-center justify-start z-50 transition-all ease-in-out duration-500 -mr-[450px]",
          open ? "-mr-0 opacity-100" : ""
        )}
      >
        <button
          type="button"
          onClick={menuOpen}
          className="absolute left-12 top-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="w-full grid grid-cols-1 text-left space-y-6 menus">
          <button
            onClick={homeScroll}
            className="homeMenu text-3xl font-bold text-zinc-300 hover:text-orange-400 transition-all duration-500 text-left"
          >
            HOME
          </button>
          <button
            onClick={aboutMeScroll}
            className="aboutMeMenu text-3xl font-bold text-zinc-300 hover:text-orange-400 transition-all duration-500 text-left"
          >
            AOUBT ME
          </button>
          <button
            onClick={experienceScroll}
            className="experienceMenu text-3xl font-bold text-zinc-300 hover:text-orange-400 transition-all duration-500 text-left"
          >
            EXPERIENCE
          </button>
          <button
            onClick={storyScroll}
            className="storyMenu text-3xl font-bold text-zinc-300 hover:text-orange-400 transition-all duration-500 text-left"
          >
            STORY
          </button>
          <button
            onClick={contactMeScroll}
            className="contactMeMenu text-3xl font-bold text-zinc-300 hover:text-orange-400 transition-all duration-500 text-left"
          >
            CONTACT ME
          </button>
        </nav>

        <p className=" absolute left-12 bottom-12 text-zinc-400 text-sm">
          ©2022 PARKCHANGEUN <br />
          ALL RIGHTS RESERVED
        </p>
      </div>

      <style>{`
  .menus button.active{
    padding:10px;
    background-color: #ff9800;
    color:#0f0f0f;
  }
  `}</style>
    </div>
  );
}
