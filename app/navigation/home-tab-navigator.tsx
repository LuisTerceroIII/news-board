import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenNames } from "@navigation/screen-names"
import { HomeGlobalFeedScreen, HomeUserFeedScreen } from "@app/screens"
import { Header, SvgIcon } from "@app/components"
import { fontFamily, palette, width } from "@app/theme"
import { HomeHeader } from "@app/screens/(homeTabs)/components/home-header"
import { dictionary } from "@app/dictionary/dictionary"

const Tab = createBottomTabNavigator()

export const HomeTabsStack = () => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.HOME_FEED}
            screenOptions={({ navigation }) => ({
                tabBarActiveTintColor: palette.bg_primary,
                tabBarInactiveTintColor: palette.disabled,
                tabBarStyle: {
                    height: 50,
                    backgroundColor: palette.primary,
                    borderColor: palette.primary
                },
                headerStyle: { backgroundColor: palette.primary, height: 60  },
                headerLeftContainerStyle: {paddingLeft: width[0]},
                headerTintColor: palette.secondary,
                headerLeft: ({ label }) => <Header tx={label} onPress={navigation.goBack} />,
                headerTitleStyle: { fontFamily: fontFamily.nunito.extraBold, fontSize: 24 },
            })}
        >
            <Tab.Screen
                key={ScreenNames.HOME_FEED}
                name={ScreenNames.HOME_FEED}
                component={HomeUserFeedScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon icon="home" linesColor={color} width={25} />
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
                    headerTitle: dictionary.homeFeed?.world_news,
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon icon="world" linesColor={color} width={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}