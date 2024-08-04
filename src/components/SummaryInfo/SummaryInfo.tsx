// import Avatar from "../../assets/avartar.png";
// import MyResume from "../../cv/cv.pdf";
// import Lottie from "react-lottie";
import Container from "components/Container/Container";
import boy from "../../assets/68377-coder-boy.json";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Timeline } from "./components/Timeline";
import Technologies from "components/Technologies/Technologies";
import { Workflow } from "components/Workflow/Workflow";
import coding from "assets/71619-coding.json";
import fbLogo from "assets/bxl-facebook.svg";
import githubLogo from "assets/bxl-github.svg";
import linkedinLogo from "assets/104493_linkedin_icon.svg";
import gmailLogo from "assets/gmail.svg";
import phoneLogo from "assets/bxs-phone.svg";
import zaloLogo from "assets/icons8-zalo.svg";
import Lottie from "react-lottie";
import { IoMdDownload } from "react-icons/io";
import classes from "components/Hero/Hero.module.css";
import MyResume from "../../cv/cv.pdf";
import { RiCustomerService2Fill } from "react-icons/ri";

const SummaryInfo = () => {
  const workFlowRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<
    "timeline" | "workflow" | "technologies" | null
  >(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };

 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)!.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScroll = async () => {
    const scrollPosition = document.documentElement.scrollTop;
    const timelineOffsetTop = timelineRef.current?.offsetTop! + 400 || 0;
    const technologiesOffsetTop =
      technologiesRef.current?.offsetTop! + 400 || 0;
    const workflowOffsetTop = workFlowRef.current?.offsetTop! + 400 || 0;
    if (
      scrollPosition >= timelineOffsetTop &&
      scrollPosition < technologiesOffsetTop
    ) {
      setScrollPosition("timeline");
    } else if (
      scrollPosition >= technologiesOffsetTop &&
      scrollPosition < workflowOffsetTop
    ) {
      setScrollPosition("technologies");
    } else if (scrollPosition >= workflowOffsetTop) {
      setScrollPosition("workflow");
    } else {
      setScrollPosition(null);
    }
  };

  return (
    <section id="about" className="bg-primary ">
      <Container className="flex py-20 space-x-0 px-5  w-full">
        <div className="hidden  flex-col justify-between sticky top-20 left-0 h-[-webkit-fill-available] w-max lg:flex">
          <div className="flex flex-col gap-10 min-h-[600px]">
            <div className="flex flex-col gap-3 text-start">
              <h1 className="text-white font-bold text-3xl">Triet Minh</h1>
              <h5 className="text-white font-semibold">
                Junior Frontend Developer
              </h5>
              <p className="whitespace-nowrap">
                I build friendly UI/ UX and meet customer's requirements
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <a onClick={() => scrollTo("timeline")}>
                <div className="flex gap-2 items-center">
                  <div
                    className={`w-[25px] h-0.5 bg-slate-400 duration-300 transition-all ${
                      scrollPosition == "timeline" && "bg-white !w-[50px]"
                    }`}
                  ></div>
                  <span
                    className={`font-semibold text-slate-400 duration-300 transition-all uppercase ${
                      scrollPosition == "timeline" && "!text-white font-bold"
                    }`}
                  >
                    My Journey
                  </span>
                </div>
              </a>
              <a  onClick={() => scrollTo("technologies")}>
                <div className="flex gap-2 items-center">
                  <div
                    className={`w-[25px] h-0.5 bg-slate-400 duration-300 transition-all ${
                      scrollPosition == "technologies" && "bg-white !w-[50px]"
                    }`}
                  ></div>
                  <span
                    className={`font-semibold text-slate-400 duration-300 transition-all uppercase ${
                      scrollPosition == "technologies" &&
                      "!text-white font-bold"
                    }`}
                  >
                    Skills
                  </span>
                </div>
              </a>
              <a  onClick={() => scrollTo("workflow")}>
                <div className="flex gap-2 items-center">
                  <div
                    className={`w-[25px] h-0.5 bg-slate-400 duration-300 transition-all ${
                      scrollPosition == "workflow" && "bg-white !w-[50px]"
                    }`}
                  ></div>
                  <span
                    className={`font-semibold text-slate-400 duration-300 transition-all uppercase ${
                      scrollPosition == "workflow" && "!text-white font-bold"
                    }`}
                  >
                    Workflow
                  </span>
                </div>
              </a>
              {/* <a
              href={MyResume}
              download={"Junior_Frontend_Developer_ToMinhTriet.pdf"}
            >
              <button
                className={`flex gap-2 items-center px-6 py-3 border group relative border-blue-600 w-fit text-white font-medium hover:text-black rounded-xl overflow-hidden bg-transparent`}
              >
                <IoMdDownload />
                <span>Download CV</span>
                <div
                  className={`absolute hidden top-0 left-0 ${classes.downloadBtn} group-hover:block`}
                >
                  <button
                    className={`flex gap-2 items-center px-6 py-3 border relative w-fit whitespace-nowrap text-black font-medium`}
                  >
                    <IoMdDownload />
                    <span>Download CV</span>
                  </button>
                </div>
              </button>
            </a> */}
            </div>
          </div>
          {/* <div style={{ maxWidth: 400 }} className="flex">
            <Lottie
              options={defaultOptions}
              // height={dimension}
              // width={dimension}

            />
          </div> */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/minhtriet1712001/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={fbLogo}
                className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
                alt=""
              />
            </a>
            <a
              href="https://github.com/TMT-Mo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubLogo}
                className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
                alt=""
              />
            </a>
            <a
              href="mailto:tmtriet.work@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full p-[4px] bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110">
                <img src={gmailLogo} className="h-6 " alt="" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/tmtriet-work/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full p-[4px] bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110">
                <img src={linkedinLogo} className="h-6 " alt="" />
              </div>
            </a>
            <a
              href="https://zalo.me/0775509168"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full p-[4px] bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110">
                <img src={zaloLogo} className="h-6 " alt="" />
              </div>
            </a>
            <a href="tel:0775509168" target="_blank" rel="noreferrer">
              <div className="rounded-full p-[4px] bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110">
                <img src={phoneLogo} className="h-6 " alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-14 space-x-0 relative md:flex-row md:space-y-0 md:space-x-16 lg:justify-end">
          <div className="flex flex-col gap-8 !w-full items-start lg:xl:max-w-[80%] xl:max-w-[70%]">
            <Timeline timelineRef={timelineRef} />
            <Technologies technologiesRef={technologiesRef} />
            <Workflow workFlowRef={workFlowRef} />
              <button
                onClick={() => {
                  scrollTo("hero")
                }}
                className="flex rounded-3xl border px-4 py-2 self-center   border-blue-600 text-white font-semibold gap-2 items-center lg:hidden"

              >
               <RiCustomerService2Fill />
<span>Contact me</span>
              </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SummaryInfo;
