import * as styles from "../styles/Welcome.module.css";
import Image from "next/image";

export default function BringYourBusinessToUs() {
  return (
    <div
      className={"w-full flex flex-col md:flex-row justify-evenly my-7"}
      id={"groovin"}
    >
      <div className="md:w-4/12 w-ful md:m-0 m-8">
        <h1 className="font-extrabold text-3xl pb-10">
          Discover new Designs from Creative People
        </h1>
        <Image
          src="/img/discover_designs.svg"
          alt="Become visible"
          width={695}
          height={870}
        />
      </div>

      <div className="w-96 p-10">
        <h3 className="text-sm font-bold text-right">
          Browse and purchase thounsands of new designs posted by different
          designers, and vote for what you like to get it in the store.
        </h3>
        <div className="flex flex-col py-8">
          <div className="flex flex-row gap-4">
            <div className="w-40 h-12 border border-gray-200 rounded-md flex justify-center items-center">
              <Image
                src="/img/explore.svg"
                alt="Become visible"
                width={30}
                height={30}
              />
            </div>

            <div className="flex gap-5 flex-col">
              <div className="flex flex-col gap-2 w-full text-right">
                <h6 className="font-extrabold">Explore and Vote</h6>
                <p className="w-full text-gray-500 text-sm">
                  Share your Designs, watch the world exploring and interacting
                  with them while providing feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 my-8">
            <div className="w-40 h-12 border border-gray-200 rounded-md flex justify-center items-center">
              <Image
                src="/img/getintouch.svg"
                alt="Become visible"
                width={30}
                height={30}
              />
            </div>

            <div className="flex gap-5 flex-col">
              <div className="flex flex-col gap-2 text-right">
                <h6 className="font-extrabold">Get unique Designs</h6>
                <p className="w-full text-gray-400 text-sm">
                  Check out the winning designs in our store, purchase what you
                  loved and get it on your doorstep in just a click.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 my-4">
            <div className="w-40 h-12 border border-gray-200 rounded-md flex justify-center items-center">
              <Image
                src="/img/design_relax.svg"
                alt="Become visible"
                width={30}
                height={30}
              />
            </div>

            <div className="flex gap-5 flex-col">
              <div className="flex flex-col gap-2 text-right">
                <h6 className="font-extrabold">Become Visible</h6>
                <p className="w-full text-gray-500 text-sm">
                  Share your Designs, watch the world exploring and interacting
                  with them while providing feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
