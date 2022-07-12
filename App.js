import React from "react";
import { RootNavigation } from "./src/navigation/root.navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./src/navigation/AuthProvider";

export default function App() {
  return (
      <SafeAreaProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </SafeAreaProvider>
  );
}
