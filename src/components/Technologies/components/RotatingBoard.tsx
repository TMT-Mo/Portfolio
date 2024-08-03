import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import materialIcon from "assets/icons8-material-ui.svg";
import ExcelIcon from "assets/file-type-excel2.svg";
import bookingIcon from "assets/booking-calendar-and-hand-click-16345.svg";
import dndIcon from "assets/3994389_cursor_drag_drop_move_pointer_icon.svg";
import qrIcon from "assets/qr-code-line.svg";
// import { ReactComponent as QrIcon } from "assets/qr-code-line.svg";
import printIcon from "assets/8396426_printer_print_machine_office_business_icon.svg";
import invoiceIcon from "assets/invoice.svg";
import packageIcon from "assets/package.svg";
import chatIcon from "assets/5094667_chat_communication_message_talk_icon.svg";
import dashboardIcon from "assets/7632690_dashboard_graph_analytics_report_icon.svg";
import cartIcon from "assets/3890936_buy_cart_market_purchase_shop_icon.svg";
import { FaFileExcel } from "react-icons/fa";
import classes from "../Technologies.module.css";
import { skillAnimationList } from "../common";
import Lottie from "react-lottie";
import { Tag } from "components/CommonUI/Tag";
import { isDesktop } from "react-device-detect";
const RotatingComponent: React.FC = () => {
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    // if(!isDesktop) return
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rotationX = (clientY / window.innerHeight - 0.5) * 60; // Rotate by up to 30 degrees in the X direction
      const rotationY = (clientX / window.innerWidth - 0.5) * 60; // Rotate by up to 30 degrees in the Y direction
      setRotation({ x: rotationX, y: rotationY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // <motion.div
    //   style={
    //     {
    //       // width: 100,
    //       // height: 100,
    //       // backgroundColor: '#56D9C6',
    //       // display: 'flex',
    //       // justifyContent: 'center',
    //       // alignItems: 'center',
    //     }
    //   }
    //   animate={{
    //     rotateX: rotation.x,
    //     rotateY: rotation.y,
    //   }}
    //   transition={{ type: "spring", stiffness: 100 }}
    // >
    //   <div className="p-4 rounded-3xl border-text-blue border">
    //     <div className="p-4 rounded-3xl border-text-blue border flex flex-col gap-8 items-center">
    //       <div className="flex gap-10 w-full justify-evenly w-[300px]">
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={packageIcon} alt={""} />
    //           Product
    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={cartIcon} alt={""} />
    //           Cart
    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={invoiceIcon} alt={""} />
    //           Order history
    //         </div>
    //       </div>

    //       <div className="flex gap-10 w-full justify-evenly w-[300px]">
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={printIcon} alt={""} />
    //           Print
    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={qrIcon} alt={""} />
    //           Scan QR
    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={dashboardIcon} alt={""} />
    //           Dashboard
    //         </div>
    //       </div>

    //       <div className="flex gap-10 w-full justify-evenly w-[300px]">
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={ExcelIcon} alt={""} />
    //           ExcelJs
    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={chatIcon} alt={""} />
    //           Chat
    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={dndIcon} alt={""} />
    //           Drag & drop
    //         </div>
    //       </div>

    //       <div className="flex gap-10">
    //         <div className="flex flex-col text-center text-sm items-center">
    //           <img width={40} src={bookingIcon} alt={""} />
    //           Booking calendar
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
    // <div className="p-4 rounded-3xl border-text-blue border">
    //     <div className={`p-4 rounded-3xl border-text-blue bg-bg-blue border flex flex-col gap-8 items-center ${classes.technologies}`}>
    //      <div className="flex gap-8">
    //      <div className="flex gap-10 flex-col justify-center">
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={packageIcon} alt={""} />
    //           <span className="font-semibold"> Product</span>

    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={cartIcon} alt={""} />
    //           <span className="font-semibold">Cart</span>

    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={invoiceIcon} alt={""} />
    //           <span className="font-semibold"> Order history</span>

    //         </div>
    //       </div>

    //       <div className="flex gap-10 flex-col justify-center">
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={printIcon} alt={""} />
    //           <span className="font-semibold">Print</span>

    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={qrIcon} alt={""} />
    //           {/* <QrIcon width={40}/> */}
    //           <span className="font-semibold">Scan QR</span>

    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={dashboardIcon} alt={""} />
    //           <span className="font-semibold"> Dashboard</span>

    //         </div>
    //       </div>

    //       <div className="flex gap-10 flex-col justify-center">
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={ExcelIcon} alt={""} />
    //           <span className="font-semibold">ExcelJs</span>

    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={chatIcon} alt={""} />
    //           <span className="font-semibold">Chat</span>

    //         </div>
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={dndIcon} alt={""} />
    //           <span className="font-semibold">   Drag & drop</span>

    //         </div>
    //       </div>
    //      </div>

    //       <div className="flex gap-10">
    //         <div className="flex flex-col text-center text-sm items-center gap-2 border-text-blue border p-2 w-full rounded-2xl hover:bg-white duration-200">
    //           <img width={40} src={bookingIcon} alt={""} />
    //           <span className="font-semibold"> Booking calendar</span>

    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // <div className="grid grid-cols-3 gap-10 translate-x-4">
    //   {skillAnimationList?.map((item) => (
    //    <div className="flex flex-col gap-3 items-center w-full text-center ">
    //      <Lottie
    //       options={item.option}
    //       height={item.height}
    //       width={item.width}
    //     />
    //     <span className="font-semibold text-white w-fit">{item.title}</span>
    //    </div>
    //   ))}
    <div className="flex flex-col gap-4">
      {skillAnimationList?.map((item, index) =>{
        if(!isShowMore && index >=3) return
        return  (
          <div className="flex flex-col gap-5 w-full items-center sm:flex-row sm:items-start">
            <div className="min-w-[200px] max-w-[200px]">
              <Lottie
                options={item.option}
                height={item.height}
                width={item.width}
                style={{
                  minWidth: "200px !important",
                }}
              />
            </div>
  
            <div className="flex flex-col gap-3 text-start mt-4">
              <div className="flex flex-col gap-4  text-start items-start md:flex-row md:item-center">
                <span className="font-semibold text-white w-fit text-xl text-start md:text-2xl">
                  {item.title}
                </span>
                <div className="flex gap-2 flex-wrap">
                {item.tools.map((tool) => (
                  <Tag>{tool}</Tag>
                ))}
                </div>
              </div>
              <span className="max-w-[350px]">{item.desc}</span>
            </div>
          </div>
        )
      })}
      <button
        className={` px-4 self-center py-2 border group relative rounded-3xl border-blue-600 w-fit text-white font-medium  overflow-hidden bg-transparent duration-300 hover:text-black hover:bg-white`}
        onClick={() => {
          setIsShowMore(!isShowMore)
        }}
      >
        Show {isShowMore ? "less" : "more"}
      </button>
    </div>
  );
};

export default RotatingComponent;
