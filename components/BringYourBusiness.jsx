import * as styles from '../styles/Welcome.module.css'

export default function BringYourBusinessToUs(){
    return(
        <div className={"py-10 px-8 " + styles.bringContainer}>
            <div className="upper">
                <h1 className="text-3xl font-bold my-3">Bring Your Bussiness Online</h1>
                <p className="text-left text-md w-2/3 my-5">Groovin provides you an online store where you can sell your best designs without the need of having a physical store.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="element py-5">
                    <h2 className="font-medium text-xl">Become Visible</h2>
                    <img src="/img/become-visible.png" alt="Become visible" className={"w-full rounded block"}/>
                    <p className="py-3 px-2">Share your Designs, watch the world exploring and interacting with them while providing feedback.</p>
                </div>
                <div className="element p-5">
                    <h2 className="font-medium text-xl px-5">Get in Competition</h2>
                    <img src="/img/become-visible.png" alt="Become visible" className={"w-full rounded block"}/>
                    <div className="py-3 px-2">Emerge in the competition with other designers, and sell the winning design securing your investment.</div>
                </div>
                <div className="element p-5">
                    <h2 className="font-medium text-xl px-5">Become Visible</h2>
                    <img src="/img/become-visible.png" alt="Become visible" className={"w-full rounded block"}/>
                    <div className="py-3 px-2">Publish the design and let Groovin do all the work from actual production to delivery.</div>
                </div>
            </div>
        </div>
    )
}