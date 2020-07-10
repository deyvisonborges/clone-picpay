import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Button, Label } from "./style";

export default function PayButton({ onPress, focused }) {
  return (
    <Button onPress={onPress} focused={focused}>
      <MaterialIcons
        name="attach-money"
        size={30}
        color={focused ? "#000" : "#fff"}
      />
      <Label focused={focused}>Pagar</Label>
    </Button>
  );
}
