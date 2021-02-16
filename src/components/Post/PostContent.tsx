import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const PostContentWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
`;

const PostContent: FunctionComponent = function () {
  return (
    <PostContentWrapper>
      <h1>Test</h1>
      <p>test</p>
      <h2>test</h2>
    </PostContentWrapper>
  );
};

export default PostContent;
