import { useState, useEffect, useRef, useMemo } from 'react';
import { PostType } from 'components/Main/PostList';

const NUMBER_OF_ITEMS_PER_PAGE: number = 10;

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostType[],
) {
  const containerRef = useRef<HTMLDivElement>();
  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostType[]>(
    () =>
      posts.filter(({ node: { frontmatter: { categories } } }: PostType) =>
        selectedCategory && selectedCategory !== 'All'
          ? categories.includes(selectedCategory)
          : true,
      ),
    [selectedCategory],
  );

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount(value => value + 1);
      observer.disconnect();
    },
  );

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      !containerRef.current ||
      !containerRef.current.children.length
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
