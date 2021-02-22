import { useState, useEffect, useRef, useMemo } from 'react';
import { PostType } from 'components/Main/PostList';

const NUMBER_OF_ITEMS_PER_PAGE: number = 10;

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostType[],
) {
  const containerRef = useRef<HTMLDivElement>();
  const observer = useRef<IntersectionObserver>();
  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostType[]>(
    () =>
      posts.filter(({ node: { frontmatter: { categories } } }: PostType) =>
        selectedCategory !== 'All'
          ? categories.includes(selectedCategory)
          : true,
      ),
    [selectedCategory],
  );

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount(value => value + 1);
      observer.disconnect();
    });
  }, [count]);

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      !containerRef.current ||
      !containerRef.current.children.length ||
      observer.current === undefined
    )
      return;

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
