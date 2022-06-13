import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.text,
}))`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
`;
