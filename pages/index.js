import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Groovin from "../components/Groovin";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import BringYourBusinessToUs from "../components/BringYourBusiness";

export default function Home() {
  return (
      <div className={"m-0 p-0"}>
          <Head>
              <title>Groovin | Home</title>
              <link rel="icon" href="/logo.png" />

          </Head>
          <div className="content min-h-screen">
              <Welcome />
              <Groovin/>
              <BringYourBusinessToUs />
          </div>
          <Footer />
      </div>
  )
}
