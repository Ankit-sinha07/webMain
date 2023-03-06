import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import FreeSession from "../components/free/free";
import Footer from "../components/Footer/Footer";
const free = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FreeSession></FreeSession>
      <Footer></Footer>
    </div>
  )
}

export default free
