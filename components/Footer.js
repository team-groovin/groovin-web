export default function Footer(){
    return (
        <div className={"bg-black px-5 py-3 container-fluid m-0"}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className={"pt-2"}>
                    <div  className="text-white">
                        <img src={"/logo-transparent.svg"} className={"inline-block"} width={80} />
                        <span className="text-white text-2xl ml-auto mr-auto">Groovin</span>
                    </div>
                    <p className="text-left text-gray-400 text-sm my-2">Copyright Groovin 2021 All Rights Reserved.</p>
                </div>
                <div className="text-gray-400 grid grid-cols-3 py-2">
                    <div className="">Start</div>
                    <div className="">Sell</div>
                    <div className="">About</div>
                    <div className="">Access</div>
                    <div className="">Market</div>
                    <div className="">Terms and Conditions</div>
                </div>
            </div>
        </div>
    )
}