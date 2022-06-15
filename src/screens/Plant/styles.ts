import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: red;
  justify-content: space-between;
  align-items: center;
`;

export const PlantInfo = styled.View`
  flex: 1;
  width: 100%;
  padding: 50px 30px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.text};
`;

export const About = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 20px 20px;
  align-items: center;
`;

export const TipContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.blueLight};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipLabel = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
`;

export const AlertGroup = styled.View`

`;

export const AlertLabel = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
