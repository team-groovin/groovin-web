import {useState} from "react";

export default function Navbar() {
    const [open,setOpen] = useState(false)
    return (
        <div className={"px-5 py-3 " + styles.container}>
            <div className="flex justify-evenly inline-block  items-stretch">
                <div className="text-left">
                    <img src={"/logo.png"} className={"inline-block"} width={150}/>
                </div>
                <div className={"md:hidden text-right py-3"}>
                    <button onClick={()=>setOpen(!open)} className="text-white focus:outline-none text-3xl">&#9776;</button>
                </div>
                <div className={`flex justify-center self-center col-span-2 md:col-span-1 py-auto ${open ? 'block':'hidden'}  md:flex text-right `}>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#start"}
                           className="text-black border-b-2 border-yellow-700 py-2 px-2">Start</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#bring"} className="text-black">Sell</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#discover"} className="text-black">Discover</a>
                    </div>
                </div>
                <div className="flex-initial px-5 mt-4">
                        <a href={"#download"} className="px-5 py-2 bg-app font-bold text-black">Access</a>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "transparent",
        color: "black",
        zIndex: 1000
    }
}