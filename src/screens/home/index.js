import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  Balance,
  BalanceContainer,
  BalanceTitle,
  Container,
  Header,
  Wrapper,
} from "./style";

import Suggestions from "../../components/suggestions";
import Activies from "../../components/activies";
import Tips from "../../components/tips";

export default function walet() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name={"qrcode-scan"}
            size={30}
            color={"#10c86e"}
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0.00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color={"#10c86e"} />
        </Header>

        <Suggestions />
        
        <Activies />
        <Tips />
      </Container>
    </Wrapper>
  );
}
