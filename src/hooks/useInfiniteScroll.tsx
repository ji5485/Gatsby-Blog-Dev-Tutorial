import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = function () {
  let observer: IntersectionObserver;
  let initial: boolean = true;

  const containerRef = useRef<HTMLDivElement>();
  const [count, setCount] = useState(1);

  useEffect(() => {
    observer = new IntersectionObserver(() => {
      if (initial) {
        initial = false;
        return;
      }

      setCount(value => value + 1);
    });
  }, []);

  useEffect(() => {
    if (
      !containerRef.current ||
      !containerRef.current.children.length ||
      !observer
    )
      return;

    const lastPostElement =
      containerRef.current.children[containerRef.current.children.length - 1];

    observer.observe(lastPostElement);

    return () => observer.unobserve(lastPostElement);
  }, [count]);

  return { containerRef, count };
};

export default useInfiniteScroll;
