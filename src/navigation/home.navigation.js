import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {FeaturedScreen} from "../screens/homeScreen/Featured";
import {SeriesScreen} from "../screens/homeScreen/Series";
import {FilmsScreen} from "../screens/homeScreen/Films";
import { scale, verticalScale} from "react-native-size-matters";

const Tab = createMaterialTopTabNavigator();

export function BottomTabView () {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#202123",},
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fed130",
        swipeEnabled: false,
        tabBarLabelStyle: {fontSize: scale(10), fontWeight: '700',alignItems: 'center'},
        tabBarIndicatorStyle: {backgroundColor: "#fed130", width: scale(20), marginLeft: scale(50), height: verticalScale(5), borderRadius: scale(20)},
        })}>
            <Tab.Screen name="Featured" component={FeaturedScreen} />
            <Tab.Screen name="Series" component={SeriesScreen} />
            <Tab.Screen name="Films" component={FilmsScreen} />
        </Tab.Navigator>
    );
}