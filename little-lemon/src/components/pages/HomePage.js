import React from 'react'
import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";

const HomePage = () => {
  return (
    <>
    <Heading/>
    <main>
        <Specials/>
        <Testimonials/>
        <About/>
    </main>

      
    </>
  );
}

export default HomePage
