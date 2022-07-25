import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const MyStory = () => {
  const storyTitle = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".storyTitle i",
      {
        scale: 180,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".storyTitle",
          start: "bottom 80%",
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".storyTitle i svg",
      {
        opacity: 0,
        strokeDasharray: 300,
        strokeDashoffset: 300,
      },
      {
        opacity: 1,
        delay: 1.5,
        duration: 1,
        strokeDashoffset: 0,

        scrollTrigger: {
          trigger: ".storyTitle",
          start: "bottom 80%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <article className="min-h-screen flex items-center overflow-hidden relative py-16 px-3 bg-white storyMain">
      <div className="container mx-auto z-10">
        <div
          className="flex items-center text-5xl md:text-7xl font-extrabold relative storyTitle"
          ref={storyTitle}
        >
          <span className="story text-white">MY</span>
          <span className="ml-3">STORY</span>

          <i className="dote inline-block w-4 h-4 bg-[#282a2e] self-end mb-2 rounded-full relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 138.608 212.389"
              className="absolute bottom-1 -right-10 h-[270px] stroke-[#282a2e]"
            >
              <path
                id="패스_79"
                data-name="패스 79"
                d="M159.06,2983.652s-3.679,56.382,58.666,86.806,85.423,68.8,75.582,97.641-39.9,26.806-39.9,26.806"
                transform="translate(-157.999 -2983.587)"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </i>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-12 mt-16">
          <div className="sm:col-span-5 lg:col-span-3 relative h-[445px] overflow-hidden rounded-lg">
            <img
              src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/b6e2c402-6868-42c3-bbc0-47bd09ad2f00/public"
              className="w-full h-full object-cover scale-100 transition-all duration-700 hover:scale-105"
              alt="나의 사진"
            />
          </div>
          <div className="sm:col-span-7 lg:col-span-9 pl-0 sm:pl-28 mt-12 sm:mt-0">
            <h2 className="font-bold text-3xl">개발을 시작하기 까지.</h2>
            <p className="mt-9 text-zinc-500 text-base md:text-lg leading-loose sm:leading-[2.3]">
              어릴때부터 두손을 움직여 음악을 연주하고 그림을 그리고 만들기를
              좋아하던 한 아이는 선생님의 조언으로 전문적인 그림세계에 입문!
              그렇게 시작된 디자인과의 인연! 대학, 기획, 디자인, 전시. 다양한
              곳에서 경험을 하다가{" "}
              <span className="font-bold text-2xl text-black inline-block hover:scale-110 transition-all">
                문득!
              </span>{" "}
              든 생각. 이 무한한 상상을 항상 보고 있는 미디어에 표출할 수
              없을까? 그렇게 시작된{" "}
              <span className="font-bold text-xl text-black inline-block hover:scale-110 transition-all">
                개
              </span>
              .{" "}
              <span className="font-bold text-xl text-black inline-block hover:scale-110 transition-all">
                알
              </span>
              .{" "}
              <span className="font-bold text-xl text-black inline-block hover:scale-110 transition-all">
                못
              </span>
              . 의 개발자의 세계. 모르는게 있으면{" "}
              <span className="text-xl text-indigo-600 font-bold inline-block hover:scale-110 transition-all">
                배우고
              </span>
              ,{" "}
              <span className="text-xl text-indigo-600 relative font-bold inline-block hover:scale-110 transition-all">
                찾아보고
              </span>
              ,{" "}
              <span className="text-xl text-indigo-600 font-bold inline-block hover:scale-110 transition-all">
                뒤져보고
              </span>
              . 그렇게 공부한{" "}
              <span className="text-xl text-black font-bold underline underline-offset-2">
                브랜딩, 디자인, 퍼블리싱, 프론트엔드개발
              </span>{" "}
              까지. 하지만 난 배우고 도전해보고 싶은게 너무 많다!
            </p>
          </div>
        </section>
      </div>
      <img
        src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/86bffd7b-d5c3-47dd-b6a6-dc8b65f94e00/public"
        className="absolute right-0 top-0 -z-10"
        alt="배경 오브젝트"
      />
      <span className="inline-block absolute left-0 bottom-0 text-[9em] font-extrabold text-zinc-50 -translate-x-9 translate-y-8 z-0">
        STORY DESIGN PUBLISHING DEVELOPE BRENDING
      </span>
    </article>
  );
};

export default MyStory;
