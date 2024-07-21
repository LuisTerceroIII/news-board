import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Route, authScreens, publicScreens } from "./routes"
import { createNavigationContainerRef } from "@react-navigation/native"
import SplashScreen from "react-native-splash-screen"
import { useSelector } from "react-redux"
import { getIsLogin } from "@model/state/auth/auth-views"
import { getInitialRoute } from "@app/model/state/ui-slices/global-ui-slice"
import { ScreenNames } from "./screen-names"
import { Header } from "@app/components"
import { fontFamily, palette } from "@app/theme"

const Stack = createNativeStackNavigator()
export const navigationRef = createNavigationContainerRef()

//actions to use without JSX, Example: Store
export function navigate(name: ScreenNames, params: any = undefined) {
	if (navigationRef.isReady()) {
		//@ts-ignore
		navigationRef.navigate(name, params)
	}
}

export const RootNavigation = (): React.JSX.Element => {

	const userIsLogIn = useSelector(getIsLogin)
	const screens = userIsLogIn ? authScreens : publicScreens
	const initialRoute = useSelector(getInitialRoute)

	const routesStack = (
		<Stack.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: { backgroundColor: palette.primary },
				headerTintColor: palette.secondary,
				headerLeft: ({label}) => <Header tx={label} onPress={navigation.goBack} />,
				headerTitleStyle: { fontFamily: fontFamily.nunito.extraBold, fontSize: 24 }
			})}
			initialRouteName={initialRoute}>
			{screens.map((screen: Route) => {
				return (
					<Stack.Screen
						key={screen.name}
						name={screen.name}
						component={screen.component}
						initialParams={screen?.initialParams}
						options={screen?.options}
					/>
				)
			})}
		</Stack.Navigator>
	)

	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() => SplashScreen.hide()}
		>
			{routesStack}
		</NavigationContainer>
	)
}

export default RootNavigation
