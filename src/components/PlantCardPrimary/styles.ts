import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  
  width: 148px;
  height: 154px;
  border-radius: 20px;
  padding: 10px 10px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const Name = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 10px;
  text-align: center;
`;
