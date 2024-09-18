import React, { useEffect } from "react";

const Scroll = ({ children, id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const elts = document.getElementsByTagName("body");
    if (elts && elts.length > 0) {
      elts[0].setAttribute("class", "stop-scrolling");
    }

    return () => {
      const elts = document.getElementsByTagName("body");
      if (elts && elts.length > 0) {
        elts[0].removeAttribute("class", "stop-scrolling");
      }
    };
  }, []);

  return <>{children}</>;
};

export default Scroll;
