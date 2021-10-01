import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import { Review } from '~/services/store';
import { BaseContainer, Avatar, BaseText } from '../../atoms';

import * as S from './styles';

type ReviewCardProps = {
  review: Review;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { user } = review;

  return (
    <BaseContainer dir="row" h={100} bg="white" w={328} br={16} mb={16}>
      <S.AvatarContainer>
        <Avatar source={{ uri: user.image }} />
      </S.AvatarContainer>
      <S.TextContainer>
        <BaseText size={12} color="dark" fontFamily="bold">
          {user.name}
        </BaseText>

        <S.RatingContainer>
          <AirbnbRating
            size={14}
            showRating={false}
            isDisabled
            defaultRating={review.rating}
          />
          <BaseText ml={6} size={10} color="greyDark">
            ({review.rating})
          </BaseText>
        </S.RatingContainer>
        <BaseText ml={6} size={10} color="greyDark" w={220}>
          ({review.description})
        </BaseText>
      </S.TextContainer>
    </BaseContainer>
  );
};
