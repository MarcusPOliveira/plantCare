import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GreetingsGroup = styled.View`
  
`;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(25)}px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
  line-height: 40px;
`;

export const Photo = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
