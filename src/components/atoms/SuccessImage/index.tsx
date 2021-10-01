import React from 'react';
import styled from 'styled-components/native';
import checkImage from '~/assets/img/testsada.png';

const sizes = {
  large: 230,
  small: 160,
};

type SuccessImageProps = {
  size: keyof typeof sizes;
};

const Image = styled.Image<{ size: number }>`
  width: ${({ theme, size }) => theme.metrics.px(size)}px;
  height: ${({ theme, size }) => theme.metrics.px(size)}px;
`;

export const SuccessImage = ({ size }: SuccessImageProps) => (
  <Image size={size ? sizes[size] : sizes.large} source={checkImage} />
);
