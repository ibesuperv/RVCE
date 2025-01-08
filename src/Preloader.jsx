import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ progress, onComplete }) => {
  const preloaderRef = useRef();
  const percentageRef = useRef();

  useEffect(() => {
    if (progress === 100) {
      // Fade-out animation when loading completes
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          preloaderRef.current.style.display = "none";
          onComplete(); // Notify parent that loading is complete
        },
      });
    }
  }, [progress, onComplete]);

  useEffect(() => {
    // Animate percentage number
    gsap.to(percentageRef.current, {
      textContent: progress,
      duration: 0.5,
      snap: { textContent: 1 },
      ease: "power1.out",
    });
  }, [progress]);

  return (
    <div
      ref={preloaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #c850c0, #ffcc70)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ textAlign: "center", color: "#fff", fontSize: "2rem" }}>
        <div
          ref={percentageRef}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          0%
        </div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;
