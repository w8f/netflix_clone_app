import { useState, useEffect } from "react";

export type Props = {
  className?: string;
};

const useNav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);
  return { show };
};

export default useNav;
