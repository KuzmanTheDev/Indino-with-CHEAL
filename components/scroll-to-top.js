import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    //always write a clean-up function for state listeners and effects
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className=" fixed z-50 bottom-10 right-10 shadow-md cursor-pointer bg-transparent rounded-full h-14 w-14 flex items-center justify-center "
          onClick={scrollToTop}
        >
          {/* <i
            class="fa fa-angle-double-down fa-stack-1x"
            style="backgroundColor: transparent;, color: black"
          ></i> */}
          {/* <img src="/arrow up.png" alt="Scroll up icon" /> */}
          <h3>Up!</h3>
        </div>
      )}
    </div>
  );
}
