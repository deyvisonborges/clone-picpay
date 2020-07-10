import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin: 15px 0;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 120px;
  height: 180px;
  border-radius: 8px;
  padding: 15px;
  margin-right: 16px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
`;

export const Img = styled.Image`
  align-self: center;
  border-radius: 100px;
  width: 60px;
  height: 60px;
`;
