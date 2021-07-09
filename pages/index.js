import Head from "next/head";
import Footer from "../components/Footer";
import Groovin from "../components/Groovin";
import Welcome from "../components/Welcome";
import BringYourBusinessToUs from "../components/BringYourBusiness";
import Discover from "../components/Discover";
import GetTheApp from "../components/GetTheApp";

export default function Home() {
  return (
    <div className={"m-0 p-0"}>
      <Head>
        <title>Groovin | Home</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="content min-h-screen">
        {/*developed by Jacques Twizeyimana and Blessing Hirwa*/}
        <Welcome />
        <Groovin />
        <BringYourBusinessToUs />
        <Discover />
        <GetTheApp />
      </div>
      <Footer />
    </div>
  );
}
