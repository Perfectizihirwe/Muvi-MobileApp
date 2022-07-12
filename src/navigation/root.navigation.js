import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./app.navigation";
import { AuthNavigation } from "./app.navigation";

export function RootNavigation() {

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
