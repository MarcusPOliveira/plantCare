import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export type ActivedButtonProps = {
  isActived?: boolean;
}

export const Container = styled.TouchableOpacity<ActivedButtonProps>`
  height: 40px;
  width: 76px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActived }) => isActived ? theme.colors.greenLight : theme.colors.grayLight};
  border-radius: 12px;
  margin-right: 20px;
`;

export const Title = styled.Text<ActivedButtonProps>`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme, isActived }) => isActived ? theme.fonts.title : theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
`;
