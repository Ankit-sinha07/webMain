import Head from "next/head";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Cookies from "../components/Cookies";
import { initializeFirebase } from "../components/Firebase/index";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  initializeFirebase();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W9N7TXM');
      `}
      </Script>
      <Head>
        <title>Career Vyas- The Perfect Guide</title>
        <meta
          name="google-site-verification"
          content="aW-3HTlrNOCU0JrumTViUW1OT4CbnvuNdkWMBtpQD14"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Career vyas Careervyas guidance mentorship mentoring platform students school colleges helping online educational education field knowledge exploring options opportunities profiles courses"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Sen&display=swap&apos;);
        </style>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W9N7TXM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
      <Cookies />
    </>
  );
}

export default MyApp;
