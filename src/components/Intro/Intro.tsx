import Container from "components/Container/Container";
import logo from "../../assets/bxl-digitalocean.svg";
import React from "react";
import classes from "./Intro.module.css";
const Intro = () => {
  return (
    <Container
      className={`${classes.intro} fixed h-screen min-w-full z-[99999] bg-black `}
    >
      <div className="flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          className={`${classes.logo} font-bold text-white text-5xl h-11  `}
        >
          M
        </span>
        <img
          src={logo}
          alt="a"
          className={`${classes.imgLogo} h-8 self-end bg-white rounded-full `}
        />
      </div>
    </Container>
  );
};

export default Intro;
