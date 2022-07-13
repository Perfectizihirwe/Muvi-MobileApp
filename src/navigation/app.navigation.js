import { createStackNavigator } from "@react-navigation/stack";
import { OnBoardScreen } from "../screens/onBoardScreen";
import { SignUp } from "../screens/signUpScreen";
import { Login } from "../screens/LoginScreen";
import { MainNavigation } from "./main.navigation";
import { WelcomeScreen } from "../screens/welcomeScreen";
import DetailScreen from "../screens/homeScreen/Detail/index";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoardScreen">
      {/* <Stack.Screen 
            name="OnBoard"
            component={OnBoardScreen}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{ headerShown: false}}
            /> */}
      <Stack.Screen
        name="MainNavigation"
        component={MainNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="OnBoard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
