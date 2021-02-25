export default function Discover(){
    return (
        <div style={styles.container} className={"p-5 sm:p-7 md:p-10"} id={"discover"}>
            <h2 className="text-3xl md:w-2/3 font-bold">Discover new Designs from Creative People</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
                <div className="col-span-1 sm:col-span-2 md:col-span-3 pr-5 md:pr-2">
                    <p className="py-5 text-md py-2">Browse and purchase thousands of new designs posted by different designers, and vote for what you like to get it in the store.</p>
                    <div className="w-10/12">
                        <h2 className="text-xl font-bold">Explore and Vote brand new content</h2>
                        <p className="font-normal text-md py-2">Browse a ton of designs crafted by different designers from all around the world, and vote what you liked.</p>
                    </div>
                    <div className="py-8 w-10/12">
                        <h2 className="text-xl font-bold">Purchase a unique design from what you liked</h2>
                        <p className="font-normal text-md py-2">Check out the winning designs in our store, purchase what you loved and get it on your doorstep in just a click.</p>
                    </div>
                    <div className="grid grid-cols-2" id={"download"}>
                        <div>
                            <img src="/img/playstore.png" alt="Groovin for android" className="block w-full  sm:h-16 md:h-28" />
                        </div>
                        <div>
                            <img src="/img/app-store.png" alt="Groovin for IOS" className="block w-full sm:h-16 md:h-32"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <img src="/img/app-in-iphone-12.png" alt="Groovin for iPhone" className="block h-full mx-auto"/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container:{
        backgroundColor:"#F6B7AA"
    }
}