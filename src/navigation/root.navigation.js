import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./app.navigation";
import { useSelector } from "react-redux";
import { AuthNavigation } from "./app.navigation";

export function RootNavigation() {
  const token = useSelector((state) => state.Authentication.authToken);

  return (
    <NavigationContainer>
      {token ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
