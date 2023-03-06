import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";
import Dairies from "../components/Dairies/Dairies";
import Stat from "../components/Carrer/Stats";
import Carrer from "../components/Carrer/Carrer";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Plans from "../components/Plans/Plans";
import JoinOurTeam from "../components/JoinOurTeam/JoinOurTeam";
import SocialMedia from "../components/SocialMedia/SocialMedia.js";
import OurRockstarMentors from "../components/OurRockstarMentors/OurRockstarMentors.js";
import QueriesAskedByYou from "../components/QueriesAskedByYou/QueriesAskedByYou.js";
import Head from "next/head";
//<JoinOurTeam />      <Stat />


export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Career vyas is a platform where school and college students can discover most latest and effective ways to pursue a career with our expert guidance and mentorship program."
        />
      </Head>
      <Navbar />
      <Main />
      <Notification />
      <OurRockstarMentors />
      <Dairies />
      <Carrer />
      <QueriesAskedByYou />
      <Banner />
      <Plans/>
      <Footer />
    </>
  );
}
