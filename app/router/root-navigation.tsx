import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./screen-names";
import { Route, screens } from "./routes";

const Stack = createNativeStackNavigator();

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

	return <NavigationContainer>{routesStack}</NavigationContainer>;
}

export default RootNavigation;
