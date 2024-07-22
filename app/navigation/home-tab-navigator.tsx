import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenNames } from "@navigation/screen-names"
import { HomeGlobalFeedScreen, HomeUserFeedScreen } from "@app/screens"
import { SvgIcon } from "@app/components"
import { palette } from "@app/theme"
import { HomeHeader } from "@app/screens/(homeTabs)/components/home-header"

const Tab = createBottomTabNavigator()

export const HomeTabsStack = () => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.HOME_FEED}
            screenOptions={() => ({
                tabBarActiveTintColor: palette.bg_primary,
                tabBarInactiveTintColor: palette.disabled,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: palette.primary,
                    borderColor: palette.primary 
                }
            })}
        >
            <Tab.Screen
                key={ScreenNames.HOME_FEED}
                name={ScreenNames.HOME_FEED}
                component={HomeUserFeedScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                      <SvgIcon icon="home" linesColor={color} width={30} />
                    ),
                    header: HomeHeader,
                }}
            />
            <Tab.Screen
                key={ScreenNames.HOME_GLOBAL}
                name={ScreenNames.HOME_GLOBAL}
                component={HomeGlobalFeedScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <SvgIcon icon="world" linesColor={color} width={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}