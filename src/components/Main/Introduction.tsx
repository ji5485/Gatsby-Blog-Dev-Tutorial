import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

const Background = styled.div`
  width: 100%;
  padding: 100px 0;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: white;
`;

const Wrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 10px;
`;

const TextBox = styled.div`
  color: white;
`;

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <TextBox>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Hyun.</Title>
        </TextBox>

        <ProfileImage />
      </Wrapper>
    </Background>
  );
};

export default Introduction;
