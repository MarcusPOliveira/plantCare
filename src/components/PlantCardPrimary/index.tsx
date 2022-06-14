import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import {
  Container,
  Name
} from './styles';

type PlantProps = TouchableOpacityProps & {
  data: {
    name: string;
    photo: string;
  }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Name>
        {data.name}
      </Name>
    </Container>
  );
}
