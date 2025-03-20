import Link from "next/link";
import { Poppins } from "next/font/google";

// Poppins font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "700"], // Font weight define karein
});

const Banner = () => {
  return (
    <div
      className={`mil-section mil-banner ${poppins.className}`} // Font apply kiya
      style={{
        backgroundImage: "url('/img/1_oX03hU-1iQIMszzyhuQUug.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between ps-5">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <p className="mil-upper mil-mb-30">
                  Full Stack Developer & Automation Engineer
                </p>
                <h1 className="mil-up mil-mb-40">Rehman Afzal</h1>
                <div className="mil-short ">
                  <p className="mil-mb-30">
                    From Lahore, Pakistan. I have rich experience in Web App Development and deployment.
                    I am also skilled in making AI chatbots and Chrome Extensions. Let's turn your vision into reality.
                  </p>
                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
