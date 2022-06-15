import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Input } from '@components/Input';
import wateringCanImg from '@assets/wateringCan.png';
import brandImg from '../../../assets/Brand.png';
import {
  Container,
  Header,
  Image,
  Brand,
  Title,
  FormsGroup,
  SecondaryOptions,
  RememberMe,
  Label,
  ForgotPassword,
  ForgotPasswordLabel,
  Footer,
  Button,
  ButtonTitle,
  CreateAccountGroup,
  CreateAccountLabel,
  CreateAccountButton,
  CreateAccountButtonLabel,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleLogin() {
    if (!email) {
      return ToastAndroid.show('O campo email deve ser preenchido!', ToastAndroid.LONG);
    }
    /*
    if (!password) {
      return ToastAndroid.show('O campo senha deve ser preenchida!', ToastAndroid.LONG);
    }
    */
    await AsyncStorage.setItem('@plantCare:user', email);
    navigation.navigate('home');
  }

  return (
    <Container>
      <Header>
        <Image source={wateringCanImg} resizeMode="contain" />
        <Brand source={brandImg} resizeMode="contain" />
        <Title>Faça login em sua conta</Title>
      </Header>
      <FormsGroup>
        <Input
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={setEmail}
        />
        <Input
          placeholder='Senha'
          secureTextEntry
        />
        <SecondaryOptions>
          <RememberMe>
            <Label>Lembrar-me</Label>
          </RememberMe>
          <ForgotPassword>
            <ForgotPasswordLabel>Esqueceu a senha?</ForgotPasswordLabel>
          </ForgotPassword>
        </SecondaryOptions>
      </FormsGroup>
      <Footer>
        <Button onPress={handleLogin}>
          <ButtonTitle>Login</ButtonTitle>
        </Button>
        <CreateAccountGroup>
          <CreateAccountLabel>Ainda não tem uma conta?</CreateAccountLabel>
          <CreateAccountButton>
            <CreateAccountButtonLabel>Criar conta</CreateAccountButtonLabel>
          </CreateAccountButton>
        </CreateAccountGroup>
      </Footer>
    </Container>
  );
}
