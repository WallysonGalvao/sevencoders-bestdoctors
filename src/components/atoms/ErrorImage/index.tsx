import React from 'react';
import styled from 'styled-components/native';
import checkImage from '~/assets/img/CheckError.png';

const Image = styled.Image`
  width: ${({ theme }) => theme.metrics.px(160)}px;
  height: ${({ theme }) => theme.metrics.px(160)}px;
`;

export const ErrorImage = () => <Image source={checkImage} />;
