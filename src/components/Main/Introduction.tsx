import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/Common/Text';

const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: white;
`;

const TextBox = styled.div`
  width: 768px;
  margin: 0 auto;
  color: white;
`;

const Introduction: FunctionComponent = function () {
  return (
    <Container>
      <TextBox>
        <Text size={20} weight={400} color="#ffffff">
          Nice to Meet You,
        </Text>
        <Text size={35} weight={700} color="#ffffff">
          I'm Junior Frontend Developer Hyun.
        </Text>
      </TextBox>
    </Container>
  );
};

export default Introduction;
