import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader";
import Holder from "./Holder";
import gsap from "gsap";

function App() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const holderRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100); 
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    setTimeout(() => {
      gsap.fromTo(
        holderRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }, 0);
  };
  return (
    <>
      {isLoading ? (
        <Preloader progress={progress} onComplete={handleLoadingComplete} />
      ) : (
        <div ref={holderRef} style={{ opacity: 0 }}>
          <Holder />
        </div>
      )}
    </>
  );
}
export default App;
