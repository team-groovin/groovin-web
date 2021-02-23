import * as styles from '../styles/Welcome.module.css'
import Navbar from "./Navbar";

export default function Welcome(){
    return(
        <div className={"bg-after-barchart " + styles.mainDiv}>
            <Navbar />
            <div className="py-12 px-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="text-black my-auto pr-16">
                        <h1 className="text-4xl font-bold sm:text-center md:text-left">Welcome to Groovin</h1>
                        <p className="my-7 text-md sm:text-center md:text-left">
                            Groovin is a fashion design crowdsources platform which empowers and supports Graphic and fashion designers creativity on a global scale by sharing their passion for
                            the world to vote and buy them.
                        </p>
                        <div className="mb-7  sm:text-center md:text-left">
                            <button className="bg-app py-3 px-10 font-medium rounded-sm text-gray-200">More Info</button>
                        </div>
                    </div>
                    <div className="img-">
                        <div className="grid grid-cols-3 gap-0">
                            <div className="py-16">
                                <h2 className="text-lg font-bold text-center">Discover</h2>
                                <img src="/img/groovin-mobile-shop-page.png" alt="" className="my-2"/>
                            </div>
                            <div className="mt-0">
                                <h2 className="text-lg font-bold text-center">Vote</h2>
                                <img src="/img/groovin-mobile-product-details.png" alt="" className="my-2"/>
                            </div>
                            <div className="py-16">
                                <h2 className="text-lg font-bold text-center">Shop</h2>
                                <img src="/img/groovin-mobile-cart-page.png" alt="" className="my-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}