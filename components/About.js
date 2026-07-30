
import { Poppins } from "next/font/google";

// Poppins font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "700"], // Font weight define karein
});
const About = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="mil-text-center">

                  <p className="mil-upper mil-mb-30">
                    Software Engineer &amp; AI Integration Specialist
                  </p>
                  <h2 className={`mil-up mil-mb-30 ${poppins.className}`}>Rehman Afzal</h2>
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                          Versatile JavaScript Developer with 3+ years of experience delivering full-stack web
                          applications and integrating AI-powered features into production systems. Skilled in
                          designing scalable backend architectures using Node.js, Express, NestJS, MongoDB, Firebase,
                          and Supabase, with hands-on experience connecting OpenAI and custom ML models to power
                          conversational AI, automated content generation, and recommendation systems. Additional
                          exposure to Rust, Golang, and modern frontend frameworks including React, Svelte, Vue,
                          and Next.js.
                        </p>
                      </div>
                    </div>
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

export default About;
