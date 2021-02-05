import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/Main/PostItem';
import { getRandomKey } from 'utils/utils';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { FluidObject } from 'gatsby-image';

export type PostType = {
  node: {
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

interface PostListProps {
  selectedCategory: string;
  posts: PostType[];
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, count } = useInfiniteScroll();

  const postListData = useMemo(
    () =>
      posts
        .filter(({ node }: PostType) =>
          selectedCategory && selectedCategory !== 'All'
            ? node.frontmatter.categories.includes(selectedCategory)
            : true,
        )
        .slice(0, count * 10),
    [selectedCategory, count],
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postListData.map(({ node: { frontmatter } }: PostType) => (
        <PostItem
          {...frontmatter}
          link="https://www.naver.com"
          key={getRandomKey()}
        />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
