import classes from "./Hero.module.css";
import MyResume from "../../cv/cv.pdf";
import Lottie from "react-lottie";
import coding from "assets/71619-coding.json";
import Container from "../Container/Container";
import { HighlightWord } from "components/CommonUI/HighlightWord";
import { TbArrowBigDownLines } from "react-icons/tb";
import fbLogo from "assets/bxl-facebook.svg";
import githubLogo from "assets/bxl-github.svg";
import linkedinLogo from "assets/104493_linkedin_icon.svg";
import gmailLogo from "assets/gmail.svg";
import phoneLogo from "assets/bxs-phone.svg";
import zaloLogo from "assets/icons8-zalo.svg";
import { IoMdDownload } from "react-icons/io";
import { isMobile } from "react-device-detect";
const Hero = () => {
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

  const scrollToTimeline = () => {
    document.querySelector("#timeline")!.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="hero"
      className={`overflow-hidden bg-primary`}
      // className={`overflow-hidden ${classes["hero"]}`}
    >
      <Container
        className={`z-0 px-5 relative items-center justify-center pt-10 flex flex-col h-fit min-w-full p-0 md:h-screen md:pt-0`}
      >
        <div className=" flex-col flex gap-10 md:hidden">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-3 text-start">
              <h1 className="text-white font-bold text-3xl">Triet Minh</h1>
              <h5 className="text-white font-semibold">
                Junior Frontend Developer
              </h5>
              <p className="whitespace-nowrap">
                I build friendly UI/ UX and meet customer's requirements
              </p>
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
        {/* <div
          className={`${classes["bg-effect"]} flex absolute flex-row w-full h-full`}
        >
        </div> */}
        {/* <div className="flex absolute flex-row">
          <Blob
            className={`${classes["blob-1"]} blur-2xl mt-100 h-20 md:ml-0 md:h-60`}
          />
          <Blob
            className={`${classes["blob-2"]} blur-2xl -mt-40 h-20 md:ml-80 md:h-60`}
          />
        </div> */}
        <div
          // data-aos={setTimeout(() => "fade-up", [2000])}
          className={`${classes["hero-animation"]} flex w-full items-center justify-between flex-col !-translate-y-8 md:flex-row lg:justify-evenly 2xl:w-2/3`}
        >
          <div className="flex flex-col  space-y-8 p-3 text-center items-center mt-10 md:text-left md:items-start md:w-1/2 md:mt-0">
            <div className="flex w-full justify-end">
              <button className=" rounded-3xl text-slate-200 border py-2 px-4 font-semibold cursor-none">
                Junior
              </button>
            </div>
            <p className="text-2xl text-white font-medium uppercase lg:text-6xl md:text-4xl">
              Frontend Developer
            </p>
            <p className="text-md text-justify text-slate-300 md:text-xl lg:text-2xl">
              I am a <HighlightWord>Junior React developer</HighlightWord> with
              one year of experience, specializing in{" "}
              <HighlightWord>ReactJS </HighlightWord>
              and <HighlightWord>TypeScript.</HighlightWord> Recently, I've
              worked on booking systems and marketplace platforms using{" "}
              <HighlightWord>Ant Design, NextJs </HighlightWord>
              and <HighlightWord>MobX</HighlightWord>. I am also skilled in
              creating responsive and user-friendly UIs with forms and tables,
              ensuring a positive UX that meets customer requirements.
            </p>
            <a
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
            </a>
          </div>
          <div style={{ maxWidth: 400 }} className="flex">
            <Lottie
              options={defaultOptions}
              // height={dimension}
              // width={dimension}
            />
          </div>
          {/* <div className="w-24 self-center flex flex-col animate-bounce -bottom-24 absolute items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-white "
            >
              <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
              <path d="M11 6h2v6h-2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
            </svg>
          </div> */}
        </div>
        <button
          onClick={scrollToTimeline}
          className="hidden rounded-full border p-4 border-text-blue animate-bounce absolute left-[50%]  bottom-6  flex-col gap-2 items-center duration-300 hover:bg-bg-blue md:flex "
          // style={{
          //   transform: 'translateX(50%) !important'
          // }}
        >
          {/* <span className="font-medium">Scroll</span> */}

          <TbArrowBigDownLines
            fontSize={20}
            className="duration-300 hover:fill-blue-500"
          />
        </button>
      </Container>
    </section>
  );
};

export default Hero;
