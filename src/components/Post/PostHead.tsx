import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostHeadInfo from 'components/Post/PostHeadInfo';
import Img, { FluidObject } from 'gatsby-image';

interface PostHeadProps {
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  color: white;
`;

const BackgroundImage = styled(Img)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const PostHead: FunctionComponent<PostHeadProps> = function ({
  thumbnail: {
    childImageSharp: { fluid },
  },
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage fluid={fluid} alt="thumbnail" />
      <PostHeadInfo />
    </PostHeadWrapper>
  );
};

export default PostHead;
