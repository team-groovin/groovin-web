import Image from "next/image";
import * as styles from "../styles/Welcome.module.css";

function GetTheApp() {
  return (
    // <div className={"flex flex-row w-full h-96justify-evenly" + styles.mainDiv}>
    //   <div className="flex flex-col w-4/12 gap-4 pt-6">
    //     <h1 className="font-extrabold text-3xl w-full text-white">
    //       Get the App now!
    //       <br />
    //       Begin your discovery
    //     </h1>
    //     <p className="text-sm w-96">
    //       Download the app to manage your projects, keep tracks of the progress
    //       and complete tasks without procastinating. Stay on track and complete
    //       on time!
    //     </p>
    //   </div>

    //   {/* <div className="z-1">
    //     <Image
    //       src="/img/get_the_app.svg"
    //       alt="Become visible"
    //       width={396}
    //       height={450}
    //     />
    //   </div> */}
    // </div>
    <div
      className={"bg-after-barchart w-full " + styles.getTheApp}
      id={"welcome"}
    >
      <div className="py-12 px-12 md:px-10 md:p-4 p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-white my-auto pr-16">
            <h1 className="text-4xl font-bold sm:text-center md:text-left">
              Get the App now! <br /> Begin your discovery
            </h1>
            <p className="my-7 text-sm sm:text-center md:text-left">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
            <p className="mt-10">Get the app</p>
            <div className="flex flex-row gap-4 md:mt-7 w-full">
              <button
                className="p-2 pl-4 w-40 mt-4 outline-none rounded-lg bg-black text-white"
                type="submit"
              >
                <div className="flex flex-col md:flex-row">
                  <Image src="/img/playstore.svg" width={17} height={12} />
                  <div className="flex flex-col">
                    <p className="uppercase text-xs">get it on</p>
                    <p className="capitalize text-md justify-self-start ml-4">
                      google play
                    </p>
                  </div>
                </div>
              </button>

              <button
                className="p-2 pl-4 w-40 mt-4 outline-none rounded-lg bg-black text-white"
                type="submit"
              >
                <div className="flex flex-col md:flex-row">
                  <Image src="/img/apple.svg" width={17} height={12} />
                  <div className="flex flex-col">
                    <p className="uppercase text-xs">get it on</p>
                    <p className="capitalize text-md justify-self-start ml-4">
                      app store
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTheApp;
