import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/Main/PostItem';

const PostListWrapper = styled.div`
  padding: 100px 0;
  width: 768px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostListWrapper>
  );
};

export default PostList;
