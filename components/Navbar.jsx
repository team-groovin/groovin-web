export default function Navbar(){
    return (
        <div className={"px-5 py-3 "+ styles.container}>
            <div className="grid grid-cols-2">
                <div className="text-left">
                    <img src={"/logo.png"} className={"inline-block"} width={80} />
                    <span className="font-bold text-lg ml-2 inline-block cursor-pointer">Groovin</span>
                </div>
                <div className={"text-right md:hidden"}>
                    <button className="text-white focus:outline-none text-3xl">&#9776;</button>
                </div>
                <div className="justify-end py-auto block md:flex">
                    <div className="flex-initial px-5 py-3">
                        <a href={"#start"} className="text-black border-b-2 border-yellow-700 py-2">&nbsp;&nbsp;Start&nbsp;&nbsp;</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#bring"} className="text-black">Sell</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#discover"} className="text-black">Discover</a>
                    </div>
                    <div className="flex-initial px-5 py-3">
                        <a href={"#download"} className="px-5 py-2 bg-app font-bold text-black">Access</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container:{
        backgroundColor:"transparent",
        color:"black",
        zIndex:1000
    }
}