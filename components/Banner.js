import Link from "next/link";

const Banner = () => {
  return (
    <div className="mil-section mil-banner">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between flex-sm-row-reverse">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />
                <p className="mil-upper mil-mb-30">
                  Full Stack Engineer
                </p>
                <h1 className="mil-up mil-mb-40">Rehman Afzal</h1>
                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                    From Lahore, Pakistan. I have rich experience in Web App Development and deployment.
                    I am also skilled in making AI chatbots and Chrome Extensions. Let's turn your vision into reality.
                  </p>
                  <div className="mil-buttons-frame">
                    {/* <Link legacyBehavior href="/portfolio">
                    <a className="mil-button mil-type-2">Portfolio</a>
                  </Link> */}
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
              src="img/faces/banner.jpg"
              alt="face"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;


