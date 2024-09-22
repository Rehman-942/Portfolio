"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
// import Education from "@/components/Education";
// import Experience from "@/components/Experience";
// import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Pagination from "@/layout/Pagination";
import PortfolioLayout from "@/layout/PortfolioLayout";
import { onepage } from "@/utility/onepage";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("mil-custom-scroll");
    onepage();
  }, []);

  return (
    <PortfolioLayout>
      <Pagination direction={"left"} />
      <div className="mil-onepage">
        <Banner />
        <About />
        <Skills />
        {/* <Education /> */}
        {/* <Experience /> */}
        <Services />
        {/* <Reviews /> */}
        <Contact />
      </div>
    </PortfolioLayout>
  );
};
export default Index;
