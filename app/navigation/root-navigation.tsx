import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Route, addInterestsScreens, authScreens, publicScreens } from "./routes"
import { createNavigationContainerRef } from "@react-navigation/native"
import SplashScreen from "react-native-splash-screen"
import { useSelector } from "react-redux"
import { getIsLogin } from "@model/state/auth/auth-views"
import { getInitialRoute } from "@app/model/state/ui-slices/global-ui-slice"
import { hasInterests } from "@app/model/state/user/user-views"

const Stack = createNativeStackNavigator()
export const navigationRef = createNavigationContainerRef()

//actions to use without JSX, Example: Store
export function navigate(name: any, params: any = undefined) {
	if (navigationRef.isReady()) {
		//@ts-ignore
		navigationRef.navigate(name, params)
	}
}

export const RootNavigation = (): React.JSX.Element => {

	const userIsLogIn = useSelector(getIsLogin)
	const userHasInterests = useSelector(hasInterests)
	const screens = userIsLogIn ? userHasInterests ? authScreens : addInterestsScreens : publicScreens
	const initialRoute = useSelector(getInitialRoute)

	const routesStack = (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
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
