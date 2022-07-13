import { createStackNavigator } from "@react-navigation/stack";
import { MoreScreen } from "../screens/moreScreen/index";
import { AccountSettingsScreen } from "../screens/moreScreen/accountSettingScreen";
import { AppSettingsScreen } from "../screens/moreScreen/appSettingsScreen";
import { HelpScreen } from "../screens/moreScreen/helpScreen";

const Stack = createStackNavigator();

export const MoreScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreHome"
        component={MoreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppSettings"
        component={AppSettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
