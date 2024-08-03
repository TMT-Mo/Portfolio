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



const SummaryInfo = () => {
  const workFlowRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<"timeline" | "workflow" | "technologies" | null>(null)

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

  const handleScroll = async () => {
    const scrollPosition = document.documentElement.scrollTop;
    const timelineOffsetTop = timelineRef.current?.offsetTop! + 400 || 0
    const technologiesOffsetTop = technologiesRef.current?.offsetTop! + 400 || 0
    const workflowOffsetTop = workFlowRef.current?.offsetTop! + 400 || 0
    if(scrollPosition >= timelineOffsetTop && scrollPosition < technologiesOffsetTop){
      setScrollPosition('timeline')
    }
    else if (scrollPosition >= technologiesOffsetTop && scrollPosition < workflowOffsetTop){
      setScrollPosition('technologies')
    }
    else if (scrollPosition >= workflowOffsetTop){
      setScrollPosition('workflow')
    }
    else {
      setScrollPosition(null)
    }
    // console.log('technologiesRef', {
    //   offsetHeight: technologiesRef.current?.offsetHeight,
    //   offsetTop: technologiesRef.current?.offsetTop,
    //   scrollTop: technologiesRef.current?.scrollTop,
    //   obj: technologiesRef.current,
    // })
    // console.log('workFlowRef', {
    //   offsetHeight: workFlowRef.current?.offsetHeight,
    //   offsetTop: workFlowRef.current?.offsetTop,
    //   scrollTop: workFlowRef.current?.scrollTop,
    //   obj: workFlowRef.current,
    // })
    // console.log(`window.innerHeight`, window.innerHeight)
    // console.log(` document.documentElement.scrollTop`,  document.documentElement.scrollTop)
    // console.log(` document.documentElement.offsetHeight`,  document.documentElement.offsetHeight)
    // renderMenuUI()
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   renderMenuUI()
  // }, [document.documentElement.scrollTop, workFlowRef.current, technologiesRef.current, timelineRef.current])
  


  return (
    <section id="about" className="bg-primary ">
      <Container className="flex py-20 space-x-0 px-5  w-full">
        {/* <span className="relative flex text-black mb-16 font-bold text-2xl md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          About me
        </span> */}
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
              <a href="#timeline">
              <div className="flex gap-2 items-center">
                <div className={`w-[25px] h-0.5 bg-slate-400 duration-300 transition-all ${scrollPosition == 'timeline' && 'bg-white !w-[50px]'}`}></div>
                <span className={`font-semibold text-slate-400 duration-300 transition-all uppercase ${scrollPosition == 'timeline' && '!text-white font-bold'}`}>My Journey</span>
              </div>
              </a>
              <a href="#technologies">
              <div className="flex gap-2 items-center">
                <div className={`w-[25px] h-0.5 bg-slate-400 duration-300 transition-all ${scrollPosition == 'technologies' && 'bg-white !w-[50px]'}`}></div>
                <span className={`font-semibold text-slate-400 duration-300 transition-all uppercase ${scrollPosition == 'technologies' && '!text-white font-bold'}`}>Skills</span>
              </div>
              </a>
              <a href="#workflow">
              <div className="flex gap-2 items-center">
                <div className={`w-[25px] h-0.5 bg-slate-400 duration-300 transition-all ${scrollPosition == 'workflow' && 'bg-white !w-[50px]'}`}></div>
                <span className={`font-semibold text-slate-400 duration-300 transition-all uppercase ${scrollPosition == 'workflow' && '!text-white font-bold'}`}>Workflow</span>
              </div>
              </a>
             
              
            
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
            <a
              href="tel:0775509168"
              target="_blank"
              rel="noreferrer"
            >
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
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SummaryInfo;
