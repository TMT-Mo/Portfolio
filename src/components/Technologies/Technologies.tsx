import Container from "components/Container/Container";
import classes from "./Technologies.module.css";
import TagSphere from "./components/TagSphere";
import toolIcon from "../../assets/88930-coding.json";
import Lottie from "react-lottie";
import React from "react";
import RotatingBoard from "./components/RotatingBoard";
interface IProps {
  technologiesRef: React.RefObject<HTMLDivElement>;
}

const Technologies = ({ technologiesRef }: IProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: toolIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <section id="technologies" className={`self-center`}>
      <Container
        className="flex flex-col space-y-12  px-6 md:px-0"
        // ref={technologiesRef}
      >
        {/* <span className="relative flex text-black font-bold text-2xl md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Technologies
        </span> */}
        <div ref={technologiesRef}></div>
        <span className="font-semibold text-white self-start text-xl ">
          Key Development Tools:
        </span>
        <TagSphere />
        <span className="font-semibold text-white self-start text-xl ">
          Core Functional Contributions:
        </span>
        <RotatingBoard />
      </Container>
    </section>
  );
};

export default Technologies;
