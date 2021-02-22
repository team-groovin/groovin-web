import * as styles from "../styles/Navbar.module.css"

export default function Navbar(){
    return (
        <div className={"px-5 py-3 "+ styles.container}>
            <div className="grid grid-cols-2">
                <div className="text-left">
                    <img src={"/logo.png"} className={"inline-block"} width={80} />
                    <span className="font-bold text-lg ml-2 inline-block">Groovin</span>
                </div>
                <div className="justify-end py-auto hidden md:flex">
                    <div className="flex-initial px-5 py-3">
                        <a href={"#start"} className="text-black">Start</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#start"} className="text-black">Sell</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#start"} className="text-black">Discover</a>
                    </div>
                    <div className="flex-initial px-5 py-1">
                        <button className="px-5 py-2 bg-app font-bold text-black">Access</button>
                    </div>
                </div>
            </div>
        </div>
    )
}