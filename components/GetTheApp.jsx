import Image from "next/image";
import * as styles from "../styles/Welcome.module.css";

function GetTheApp() {
  return (
    <div className={"flex flex-row w-full h-96justify-evenly" + styles.mainDiv}>
      <div className="flex flex-col w-4/12 gap-4 pt-6">
        <h1 className="font-extrabold text-3xl w-full text-white">
          Get the App now!
          <br />
          Begin your discovery
        </h1>
        <p className="text-sm w-96">
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procastinating. Stay on track and complete
          on time!
        </p>
      </div>

      {/* <div className="z-1">
        <Image
          src="/img/get_the_app.svg"
          alt="Become visible"
          width={396}
          height={450}
        />
      </div> */}
    </div>
  );
}

export default GetTheApp;
