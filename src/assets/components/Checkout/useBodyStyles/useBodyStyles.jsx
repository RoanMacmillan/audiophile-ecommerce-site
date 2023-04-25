import { useEffect } from "react";

const useBodyStyles = (showModal) => {
  useEffect(() => {
    const originalBodyBackgroundColor = document.body.style.backgroundColor;
    const originalBodyOverflow = document.body.style.overflow;

    const updateBackgroundColor = () => {
      if (window.matchMedia("(max-width: 1183px)").matches) {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "#F2F2F2";
      }
    };

    const updateOverflow = () => {
      document.body.style.overflow = showModal ? "hidden" : originalBodyOverflow;
    };

    updateBackgroundColor();
    updateOverflow();

    window.addEventListener("resize", updateBackgroundColor);

    return () => {
      document.body.style.backgroundColor = originalBodyBackgroundColor;
      document.body.style.overflow = originalBodyOverflow;
      window.removeEventListener("resize", updateBackgroundColor);
    };
  }, [showModal]);
};

export default useBodyStyles;
