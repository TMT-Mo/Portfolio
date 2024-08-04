import Container from "components/Container/Container";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";

interface IWorkFlowItem {
  title: string;
  des: string;
}

const workflowList: IWorkFlowItem[] = [
  {
    des: "Requirements Analysis",
    title: "01",
  },
  {
    des: "Ask about deadlines and restrictions",
    title: "02",
  },
  {
    des: "Setting up the environment",
    title: "03",
  },
  {
    des: "Programming",
    title: "04",
  },
  {
    des: "Testing my results",
    title: "05",
  },
  {
    des: "Report",
    title: "06",
  },
];

interface IProps {
  workFlowRef: React.RefObject<HTMLDivElement>
}

export const Workflow = ({workFlowRef}: IProps) => {
    const [rotation, setRotation] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
      });
    
      // useEffect(() => {
      //   const handleMouseMove = (event: MouseEvent) => {
      //     const { clientX, clientY } = event;
      //     const rotationX = (clientY / window.innerHeight - 0.5) * 60; // Rotate by up to 30 degrees in the X direction
      //     const rotationY = (clientX / window.innerWidth -0.5) * 60; // Rotate by up to 30 degrees in the Y direction
      //     setRotation({ x: rotationX, y: rotationY });
      //   };
    
      //   window.addEventListener("mousemove", handleMouseMove);
      //   return () => {
      //     window.removeEventListener("mousemove", handleMouseMove);
      //   };
      // }, []);
  return (
    <section
      id="workflow"
      className={`self-center w-full max-w-[550px]`}
    >
      <Container className="flex flex-col space-y-12  md:px-0" >
      <span className="font-semibold text-white self-start text-xl ">
        My Workflow: 
        </span>
         <motion.div
      style={
        {
          // width: 100,
          // height: 100,
          // backgroundColor: '#56D9C6',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
        }
      }
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={workFlowRef}
    >

       {/* {isDesktop && <div className="p-4 rounded-3xl border-text-blue border-4">
          <div className="p-4 rounded-3xl border-text-blue border bg-bg-blue flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-6 w-full">
              {workflowList.map((item) => (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center px-4">
                    <span className="border border-slate-700 rounded-2xl py-1 px-3 ">{item.title}</span>
                    <span className="text-2xl font-light text-start">{item.des}</span>
                  </div>
                  <div className="h-[1px] w-full bg-slate-600"></div>
                </div>
              ))}
            </div>
          </div>
        </div>}

        {!isDesktop && <div className="flex flex-col gap-6 w-full">
              {workflowList.map((item) => (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center px-4">
                    <span className="border border-slate-700 rounded-2xl py-1 px-3 ">{item.title}</span>
                    <span className="text-2xl font-light text-start">{item.des}</span>
                  </div>
                  <div className="h-[1px] w-full bg-slate-600"></div>
                </div>
              ))}
            </div>} */}
            <div className="flex flex-col gap-6 w-full">
              {workflowList.map((item) => (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center px-4">
                    <span className="border border-slate-700 rounded-2xl py-1 px-3 ">{item.title}</span>
                    <span className="text-2xl font-light text-start">{item.des}</span>
                  </div>
                  <div className="h-[1px] w-full bg-slate-600"></div>
                </div>
              ))}
              
            </div>
    </motion.div>
      </Container>
    </section>
  );
};
