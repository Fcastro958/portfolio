import { useEffect, useState } from "react";

const useIntersection = (element, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, [element, options]);

  return isIntersecting;
};

export default useIntersection;
