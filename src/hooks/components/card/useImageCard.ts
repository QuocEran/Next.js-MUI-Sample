import { useEffect, useRef } from "react";

const useImageCard = (isLast: boolean | undefined, newLimit: () => void) => {
  /**
   * Select the Card component with useRef
   */
  const cardRef = useRef();

  /**
   * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
   */
  useEffect(
    () => {
      if (!cardRef?.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (isLast && entry.isIntersecting) {
          newLimit();
          observer.unobserve(entry.target);
        }
      });

      observer.observe(cardRef.current);
    },
    // eslint-disable-next-line
    [isLast],
  );

  return {
    cardRef,
  };
};

export default useImageCard;
