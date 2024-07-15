import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./app/router/screen-names";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Route, screens } from "./app/router/routes";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

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
		<SafeAreaProvider>
			<NavigationContainer>{routesStack}</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
