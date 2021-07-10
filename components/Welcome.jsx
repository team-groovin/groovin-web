import Image from "next/image";
import * as styles from "../styles/Welcome.module.css";
import Navbar from "./Navbar";

export default function Welcome() {
  return (
    <div className="flex flex-col gap-0">
      <div
        className={"bg-after-barchart w-full " + styles.mainDiv}
        id={"welcome"}
      >
        <Navbar />
        <div className="py-12 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-black my-auto pr-16">
              <h1 className="text-4xl font-bold sm:text-center md:text-left">
                Welcome to Groovin
              </h1>
              <p className="my-7 text-md sm:text-center md:text-left">
                Groovin is a fashion design crowdsources platform which empowers
                and supports Graphic and fashion designers creativity on a
                global scale by sharing their passion for the world to vote and
                buy them.
              </p>
              <div className="mb-7  sm:text-center md:text-left">
                <a
                  href={"/#groovin"}
                  className="bg-app py-3 px-10 font-medium rounded-sm text-gray-100"
                >
                  More info
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="flex flex-row">
                <div className="py-16">
                  <h2 className="text-lg font-bold text-center">Discover</h2>
                  <Image
                    src="/img/groovin-mobile-shop-page.png"
                    alt="dscover image"
                    className="my-2 z-0"
                    width={299}
                    height={647}
                  />
                </div>
                <div className="mt-0">
                  <h2 className="text-lg font-bold text-center">Vote</h2>
                  <Image
                    src="/img/groovin-mobile-product-details.png"
                    alt="vote"
                    className="my-2 z-10"
                    width={311}
                    height={647}
                  />
                </div>
                <div className="py-16">
                  <h2 className="text-lg font-bold text-center">Shop</h2>
                  <Image
                    src="/img/groovin-mobile-cart-page.png"
                    alt="shop"
                    className="my-2"
                    width={311}
                    height={647}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "h-24 w-full bg-gradient-to-b from-[#ec634870] via-[#F9D1C8]  to-[#f6fcff04]"
        }
      ></div>
    </div>
  );
}
