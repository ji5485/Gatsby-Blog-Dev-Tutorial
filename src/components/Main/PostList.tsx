import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem, { PostItemProps } from 'components/Main/PostItem';
import { getRandomKey } from 'utils/utils';
import DummyData from '../../../static/post-dummy-data.json';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

interface PostListProps {
  category?: string;
}

const PostListWrapper = styled.div`
  padding: 50px 0 100px;
  width: 768px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const PostList: FunctionComponent<PostListProps> = function ({ category }) {
  const { containerRef, count } = useInfiniteScroll();

  const postListData = useMemo(
    () =>
      DummyData.filter((post: PostItemProps) =>
        category ? post.category.includes(category) : true,
      ).slice(0, count * 10),
    [category, count],
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postListData.map((post: PostItemProps) => (
        <PostItem {...post} key={getRandomKey()} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
