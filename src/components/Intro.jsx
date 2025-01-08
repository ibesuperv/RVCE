import React, { useEffect } from "react"; // React and useEffect for component lifecycle
import gsap from "gsap"; // GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // GSAP plugin for scroll-based animations

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Intro() {
  useEffect(() => {
    gsap.to(".enlarge", {
      scale: 100,
      height: "100rem",
      width: "100rem",
      duration: 3,
      scrollTrigger: {
        trigger: ".aii",
        start: "top 28%",
        scrub: 6,
        ease: "power1.inOut",
      },
      onComplete: () => {
        gsap.set(".enlarge", {
          scale: 0,
          clearProps: "all",
        });
      },
    });
    gsap.to(".textt", {
      color:"black",
      scrollTrigger: {
        trigger: ".aii",
        start: "top 28%",
        scrub: 0,
        ease: "power1.inOut",
      },
      onComplete: () => {
        gsap.set(".textt", {
          clearProps: "all",
        });
      },
    });
  }, []);

  return (
    <div className="relative w-full bg-[#12071f] h-screen aii overflow-hidden">
      <div className="enlarge z-0 absolute overflow-hidden left-0 top-0 rounded-full bg-neutral-50 w-0 h-0" />

      <div className="ai-part h-full text-purple-400 bg-transparent text-5xl z-10 relative flex justify-center gap-6 items-center">
        <div
          className="image rounded-3xl shadow-2xl"
          style={{ overflow: "hidden", width: "300px", height: "300px" }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.F_OGbA70Drg8vmiDoCYRTAHaHa?rs=1&pid=ImgDetMain"
            alt="RVCE"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        <p className="text-center textt text-2xl select-none w-3/4 text-white p-16 font-light leading-relaxed tracking-wide">
          Established in 1963 with three engineering branches namely Civil,
          Mechanical, and Electrical, today RVCE offers 15 Under Graduate
          Engineering programmes, 14 Master Degree programmes, and Doctoral
          Studies. Located 13 km from the heart of Bangalore City – the Silicon
          Valley of India, on Mysore Road. Sprawling campus spread over an area
          of 16.85 acres set in sylvan surroundings. Provides an ideal ambience
          to stimulate the teaching-learning process, helping in bringing out
          skilled and disciplined Engineers.
        </p>
      </div>
    </div>
  );
}

export default Intro;
