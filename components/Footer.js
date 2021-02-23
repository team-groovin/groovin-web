export default function Footer(){
    return (
        <div className={"bg-black px-5 py-3 container-fluid m-0"}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className={"pt-2"}>
                    <div  className="text-white">
                        <img src={"/logo-transparent.svg"} className={"inline-block"} width={80} />
                        <a href={"#welcome"} className="text-white text-2xl ml-auto mr-auto">Groovin</a>
                    </div>
                    <h2 className="hidden">Developed by <a href={"https://twitter.com/JacquesSandberg"} target={"_blank"}>Jacques Twizeyimana</a></h2>
                    <p className="text-left text-gray-400 text-sm my-0">Copyright Groovin 2021 All Rights Reserved.</p>
                </div>
                <div className="text-gray-400 grid grid-cols-3 py-2">
                    <div className=""><a href={"#start"}>Start</a></div>
                    <div className=""><a href={"#bring"}>Sell</a> </div>
                    <div className=""><a  href={"https://twitter.com/JacquesSandberg"} target={"_blank"}>About</a> </div>
                    <div className=""><a href={"#download"}>Access</a> </div>
                    <div className=""><a href={"#groovin"}>Market</a> </div>
                    <div className=""><a>Terms and Conditions</a> </div>
                </div>
            </div>
        </div>
    )
}