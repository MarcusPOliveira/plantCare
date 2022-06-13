import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(80)}px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Brand = styled.Image`
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const FormsGroup = styled.View`
  width: 100%;
  padding: 45px 31px;
`;

export const SecondaryOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RememberMe = styled.TouchableOpacity``;

export const Label = styled.Text`
  font-size: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordLabel = styled.Text`
  font-size: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.boldTitle};
  color: ${({ theme }) => theme.colors.alternative};
`;

export const Footer = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 314px;
  height: 56px;
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.white};
`;

export const CreateAccountGroup = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const CreateAccountLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountButtonLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.alternative};
  margin-left: 10px;
`;
