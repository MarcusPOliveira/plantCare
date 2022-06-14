import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 50px 0px 28px 28px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.text};
  line-height: 20px;
  margin-top: 60px;
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
  line-height: 23px;
`;

export const Environments = styled.View`
  height: 40px;
  padding: 0 32px;
`;

export const EnviromentsList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
  }
})``;

export const Plants = styled.View`
  padding: 0 25px;
  flex: 1;
  justify-content: center;
  margin-top: 30px;
`;

export const PlantsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
