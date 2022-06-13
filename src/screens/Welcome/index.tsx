import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import wateringImg from '@assets/watering.png';
import {
  Container,
  Title,
  Illustration,
  Subtitle,
  NextButton
} from './styles';

export function Welcome() {

  const theme = useTheme();
  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate('signIn');
  }

  return (
    <Container>
      <Title>
        O app perfeito {'\n'}
        para te ajudar a {'\n'}
        cuidar de {'\n'}
        suas plantas!
      </Title>
      <Illustration source={wateringImg} />
      <Subtitle>
        Não esqueça mais de regar {'\n'}
        suas plantas. Nós cuidamos {'\n'}
        de lembrar você {'\n'}
        sempre que precisar!
      </Subtitle>
      <NextButton onPress={handleNext} >
        <Feather
          name="chevron-right"
          color={theme.colors.white}
          size={25}
        />
      </NextButton>
    </Container>
  );
}
