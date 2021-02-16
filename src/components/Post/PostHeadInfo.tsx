import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
`;

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  margin-top: auto;
  font-size: 45px;
  font-weight: 800;
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const PostHeadInfo: FunctionComponent = function () {
  const goBackPage = () => window.history.back();

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>Test Title 1</Title>
      <PostData>
        <div>Web / Backend / Hacking / Algorithm</div>
        <div>2021.02.15.</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
