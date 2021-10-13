import Image from "next/image";
import * as styles from "../styles/Welcome.module.css";
import Navbar from "./Navbar";
export default function Welcome() {
  return (
    <div className="flex flex-col">
      <div
        className={"bg-after-barchart w-full " + styles.mainDiv}
        id={"welcome"}>
        <Navbar />
        <div className="py-12 px-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-black my-auto pr-16 pl-4 ">
              <h1 className="text-4xl font-bold sm:text-center md:text-left">A Personal Mobile Fashion Design Platform</h1>
              <p className="my-7 text-md sm:text-center md:text-left">
              Groovinx is a mobile fashion design platform where you personalize & 
              design your clothing and we make them. You Design it; We Make it! 
              </p>
              <div className="mb-7  sm:text-center md:text-left">
                <a href={"/#groovin"}
                  className="bg-app py-3 px-10 font-medium rounded-sm text-gray-100" >More info</a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img src={"/img/Mockups.png"} className={"inline-block"} width={550}/>
            </div>
          </div>
        </div>
      </div>
      <div className={
          "h-24 w-full bg-gradient-to-b from-[#ec634870] via-[#F9D1C8]  to-[#f6fcff04]"}></div></div>
  );
}
