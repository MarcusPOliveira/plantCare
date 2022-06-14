import React from 'react';

import {
  Container,
  GreetingsGroup,
  Greetings,
  UserName,
  Photo,
} from './styles';

export function Header() {
  return (
    <Container>
      <GreetingsGroup>
        <Greetings>Olá,</Greetings>
        <UserName>Marcus</UserName>
      </GreetingsGroup>
      <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47436367?v=4' }} />
    </Container>
  );
}
