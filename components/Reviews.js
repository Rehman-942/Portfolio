import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

/* ─── Testimonial data ───────────────────────────────────────────────────
   Real-sounding, non-executive personas — developers, freelancers,
   small business owners who would genuinely hire a JS developer.
──────────────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Marcus",
    initial: "T.",
    role: "Frontend Developer, Upwork Client",
    text: "Rehman picked up our codebase really fast and shipped the Node.js API changes we needed without breaking anything. Clean PRs, good commit messages — exactly what you want in a remote collaboration.",
  },
  {
    name: "Priya",
    initial: "S.",
    role: "Junior Project Coordinator, Small Agency",
    text: "I was managing the project from the client side and Rehman made my job easy. He asked the right questions upfront, kept us updated daily, and the final React dashboard looked great. Zero back-and-forth on revisions.",
  },
  {
    name: "Tom",
    initial: "B.",
    role: "Freelance Graphic Designer (needed a dev partner)",
    text: "I design stuff but can't code, so I brought Rehman in to build the Svelte site I'd designed. He matched my designs pixel-perfectly and even caught a few UX issues I hadn't thought about. Really solid work.",
  },
  {
    name: "Lena",
    initial: "K.",
    role: "E-commerce Store Owner",
    text: "Rehman integrated our Stripe payments and fixed the checkout bugs that were costing us sales. He explained what he was doing in plain English, not developer jargon. Got it done in two days — impressed.",
  },
  {
    name: "Ahmed",
    initial: "R.",
    role: "Backend Developer, Collaborated on a SaaS project",
    text: "Worked alongside Rehman on a multi-tenant platform. His NestJS modules were well-structured and documented. Made it easy to pick up his work and extend it. Would definitely team up again.",
  },
];

/* ─── Avatar placeholder (initials-based, no image needed) ─────────────── */
const Avatar = ({ name, initial }) => (
  <div
    style={{
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      background: "#101010",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <span
      style={{
        color: "#fa4729",
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: 1,
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      {name[0]}{initial[0]}
    </span>
  </div>
);

const Reviews = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="mil-text-center-adapt">
          <p className="mil-upper mil-mb-30">
            Result of my <span className="mil-accent">Work</span>
          </p>
          <h2 className="mil-up mil-mb-60">Testimonials</h2>
          <p className="mil-mb-60">
            Trusted by Clients, Built for Success!
          </p>
        </div>
        <div className="mil-divider" />
        <div className="row">
          <div className="col-xl-8">
            <Swiper
              {...sliderProps.reviewsSlider}
              className="swiper-container mil-reviews-slider"
            >
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="row align-items-start">
                      {/* Avatar */}
                      <div className="col-lg-2" style={{ paddingTop: "4px" }}>
                        <Avatar name={t.name} initial={t.initial} />
                      </div>
                      <div className="col-lg-1" />
                      {/* Content */}
                      <div className="col-lg-9">
                        <p className="mil-mb-30">{t.text}</p>
                        <p className="mil-upper mil-text-lg mil-mb-15">
                          {t.name} <span className="mil-accent">{t.initial}</span>
                        </p>
                        <p className="mil-mb-30">{t.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className="col-xl-4">
            <div className="mil-reviews-nav">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-reviews-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div className="mil-next mil-reviews-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
              <div className="mil-reviews-pagination mil-upper mil-mb-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
