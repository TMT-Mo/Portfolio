import { Options } from "react-lottie";
import dashboard from "assets/Animation - dashboard.json"
import calendar from "assets/Animation - calendar.json"
import excel from "assets/Animation - excel.json"
import chat from "assets/Animation - chat.json"
import scan from "assets/Animation - scan.json"
import form from "assets/Animation - form.json"
import cart from "assets/Animation - cart.json"

interface IAnimation {
    width: number,
    height: number,
    option: Options,
    title: string,
    desc: string,
    tools: string[]
}

export const skillAnimationList:IAnimation[] = [
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: dashboard,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 170, 
      width: 200,
      title: "Analytics Dashboard",
      desc: "Help business owners track their overall income and the number of products sold within a specific timeframe.",
      tools: ["EchartJs"]
   },
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: calendar,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 170, 
      width: 200,
      title: "Booking Calendar",
      tools: ["React-big-calendar"],
      desc: "Enabled users to view available slots, select preferred services, and book appointments seamlessly.",
   },
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: excel,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 170, 
      width: 220,
      title: "Export Excel",
      tools: ["ExcelJs"],
      desc: "Provided customers with an easy way to generate and download reports, enabling better data analysis and record-keeping."
   },
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: form,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 200, 
      width: 200,
      title: "Form Data Management",
      tools: ["Ant Design"],
      desc: "Implemented features like conditional fields, real-time validation, and data submission to enhance user experience and data accuracy."
   },
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: chat,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 170, 
      width: 200,
      title: "Chat",
      tools: ["chat-ui-kit-react", 'one-signal'],
      desc: "Developed a real-time chat application enabling users to send and receive messages instantly."
   },
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: cart,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 170, 
      width: 200,
      title: "Food Cart",
      tools: ["MobX"],
      desc: "Allows users to add, remove, and update items in their cart. The cart maintains state across sessions, ensuring that users' selections are preserved."
   },
   {
    option: {
        loop: true,
        autoplay: true,
        animationData: scan,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      height: 170, 
      width: 200,
      title: "Scan QR Code",
      tools: ["react-scanner"],
      desc: "Allows users to scan and decode QR codes directly from their devices which quickly access to information encoded in QR code"
   }
]