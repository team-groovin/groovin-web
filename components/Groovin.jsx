export default function Groovin(){
    return (
        <div className={"w-full m-0 p-0"} id={"groovin"}>
            <div className="bg-app py-7 px-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <div className="p-0"></div>
                    <div className="p-0">
                        <img src={"/img/groovin-mobile-shop-page.png"} className={"block w-full"} />
                    </div>
                    <div className="p-0 md:pl-4 md:mt-28">
                        <img src={"/img/groovin-mobile-product-details.png"} className={"block w-full"} />
                    </div>
                    <div className="p-0 mt-12">
                        <img src={"/logo-transparent.svg"} className={"block mx-auto"} width={80} />
                        <h3 className="text-white text-3xl text-center font-bold">Groovin</h3>
                        <p className="text-gray-300 text-md my-2 text-center">A fashion design crowdsourcing platform</p>
                        <img src={"/img/groovin-mobile-cart-page.png"} className={"block w-full mt-20"} />
                    </div>
                    <div className="p-0"></div>
                </div>
            </div>
        </div>
    )
}