import React from 'react';
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ focused }) => focused ? '#c3c3c3' : '#00AC4A'};
  border-radius: 30px;
  height: 60px;
  justify-content: center;
  width: 60px;
`;

export const Label = styled.Text`
  color: ${({ focused }) => focused ? '#000' : '#fff'};
`;
