import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenNames } from "@navigation/screen-names"
import { HomeFiltersScreen, HomeScreen } from "@app/screens"

const Tab = createBottomTabNavigator()

export const HomeTabsStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={ScreenNames.HOME_FEED}
        >
            <Tab.Screen
                key={ScreenNames.HOME_FEED}
                name={ScreenNames.HOME_FEED}
                component={HomeScreen}
            />
            <Tab.Screen
                key={ScreenNames.HOME_FILTERS}
                name={ScreenNames.HOME_FILTERS}
                component={HomeFiltersScreen}
            />
        </Tab.Navigator>
    )
}