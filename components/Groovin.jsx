import Image from "next/image";

export default function Groovin() {
  return (
    <div
      className={"w-full flex flex-col md:flex-row justify-evenly my-7"}
      id={"groovin"}
    >
      <div className="w-96 p-10">
        <h1 className="text-3xl font-extrabold">
          Bring Your <br />
          Business Online
        </h1>
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
              <div className="flex flex-col gap-2">
                <h6 className="font-extrabold">Become Visible</h6>
                <p className="w-full">
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
              <div className="flex flex-col gap-2">
                <h6 className="font-extrabold">Become Visible</h6>
                <p className="w-full">
                  Share your Designs, watch the world exploring and interacting
                  with them while providing feedback.
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
              <div className="flex flex-col gap-2">
                <h6 className="font-extrabold">Become Visible</h6>
                <p className="w-full">
                  Share your Designs, watch the world exploring and interacting
                  with them while providing feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 w-full md:m-0 m-8">
        <Image
          src="/img/bring_business_online.svg"
          alt="Become visible"
          width={695}
          height={870}
        />
      </div>
    </div>
  );
}
