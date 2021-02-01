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
  category?: string;
  posts: PostType[];
}

const PostListWrapper = styled.div`
  padding: 50px 0 100px;
  width: 768px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const PostList: FunctionComponent<PostListProps> = function ({
  category,
  posts,
}) {
  const { containerRef, count } = useInfiniteScroll();

  const postListData = useMemo(
    () =>
      posts
        .filter(({ node }: PostType) =>
          category && category !== 'ALL'
            ? node.frontmatter.categories.includes(category)
            : true,
        )
        .slice(0, count * 10),
    [category, count],
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
