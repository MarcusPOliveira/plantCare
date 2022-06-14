import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
  ActivedButtonProps
} from './styles';

type Props = TouchableOpacityProps & ActivedButtonProps & {
  title: string;
}

export function EnviromentButton({ title, isActived = false, ...rest }: Props) {
  return (
    <Container isActived={isActived} {...rest}>
      <Title isActived={isActived}>{title}</Title>
    </Container >
  );
}
