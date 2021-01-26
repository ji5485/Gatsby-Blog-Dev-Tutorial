import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type TextStyleProps = {
  size?: number;
  weight?: number;
  color?: string;
};

interface TextProps extends TextStyleProps {
  children: string;
}

const TextWrapper = styled.div<TextStyleProps>(({ size, weight, color }) => ({
  fontSize: size + 'px',
  fontWeight: weight,
  color,
}));

const Text: FunctionComponent<TextProps> = function ({
  size,
  weight,
  color,
  children,
}) {
  return (
    <TextWrapper size={size} weight={weight} color={color}>
      {children}
    </TextWrapper>
  );
};

Text.defaultProps = {
  size: 15,
  weight: 400,
  color: '#000000',
};

export default Text;
