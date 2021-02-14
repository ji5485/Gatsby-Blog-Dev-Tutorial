import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostHeadInfo from 'components/Post/PostHeadInfo';

const IMAGE_LINK =
  'https://ji5485.github.io/static/4dc3342a67395060fe50eb0ecbe449e4/4d854/javascript-core-concept-summary-prototype-chaining-2.webp';

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  color: white;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const PostHead: FunctionComponent = function () {
  return (
    <PostHeadWrapper>
      <BackgroundImage src={IMAGE_LINK} alt="thumbnail" />
      <PostHeadInfo />
    </PostHeadWrapper>
  );
};

export default PostHead;
