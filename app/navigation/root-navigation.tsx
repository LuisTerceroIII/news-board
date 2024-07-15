import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./screen-names";
import { Route, screens } from "./routes";
import { createNavigationContainerRef } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

//actions to use without JSX, Example: Store
export function navigate(name: any, params: any = undefined) {
	if (navigationRef.isReady()) {
		//@ts-ignore
		navigationRef.navigate(name, params);
	}
}

export function RootNavigation(): React.JSX.Element {
	const routesStack = useMemo(() => {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: true,
				}}
				initialRouteName={ScreenNames.HOME}>
				{screens.map((screen: Route) => {
					return (
						<Stack.Screen
							key={screen.name}
							name={screen.name}
							component={screen.component}
							initialParams={screen?.initialParams}
							options={screen?.options}
						/>
					);
				})}
			</Stack.Navigator>
		);
	}, []);

	return (
		<NavigationContainer
			onReady={() => SplashScreen.hide()}
			ref={navigationRef}>
			{routesStack}
		</NavigationContainer>
	);
}

export default RootNavigation;
