import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  GreetingsGroup,
  Greetings,
  UserName,
  Photo,
} from './styles';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantCare:user');
      setUserName(user || '');
    }
    loadStorageUserName();
  }, [userName]);

  return (
    <Container>
      <GreetingsGroup>
        <Greetings>Olá,</Greetings>
        <UserName>{userName}</UserName>
      </GreetingsGroup>
      <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47436367?v=4' }} />
    </Container>
  );
}
