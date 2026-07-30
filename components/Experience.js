import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Experience = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ top: 0, right: "15%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "15%", left: "-5%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Crafting Exceptional <span className="mil-accent">Experiences</span>
        </p>
        <h2 className="mil-up mil-mb-60">Experience</h2>
        <div className="row">
          <div className="col-lg-6">
            <p className="mil-mb-60">
              3+ years of professional experience building full-stack web applications,
              integrating AI-powered features, and shipping production-ready solutions
              across agency and product environments.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mil-timeline-nav-2">
              <div className="mil-timeline-2-pagination mil-upper mil-mb-30" />
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-timeline-2-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div className="mil-next mil-timeline-2-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="col-xl-12">
            <Swiper
              {...sliderProps.timelineSlider}
              className="swiper-container mil-timeline-slider-2"
            >
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">Zolara Global Tech</p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">JavaScript Developer</span> &mdash; Sept 2024 to Sept 2025
                    </p>
                    <p>
                      Architected and integrated AI-powered features into client applications by connecting
                      OpenAI APIs and custom ML models, delivering intelligent chat assistants, automated
                      content generation, and personalized recommendation systems. Led backend development
                      using Node.js and NestJS, integrated Stripe for payments, and containerized services
                      with Docker.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">
                      OpusAI
                    </p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">Software Engineer (Remote)</span> &mdash; Oct 2022 to Sept 2024
                    </p>
                    <p>
                      Led development of multiple dynamic websites using Svelte.js and React.js, backed by
                      Node.js and Firebase. Built a production-grade Chrome Extension with Svelte, designed
                      a Rust-powered backend integrated with PostgreSQL, and implemented internationalization
                      with svelte-i18n across multiple languages.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">Game Train</p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">Internship, MERN Stack Developer</span> &mdash; Jun 2022 to Sept 2022
                    </p>
                    <p>
                      Designed and implemented responsive e-commerce pages using React.js with modern UI/UX
                      principles. Built RESTful APIs and backend services in Node.js with MongoDB, and
                      leveraged third-party APIs to expand website features and deliver dynamic content.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
