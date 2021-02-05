import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

const Background = styled.div`
  width: 100%;
  padding: 100px 0;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 25px;
  }
`;

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Hyun.</Title>
        </div>

        <ProfileImage />
      </Wrapper>
    </Background>
  );
};

export default Introduction;
