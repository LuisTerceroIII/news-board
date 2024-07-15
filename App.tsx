import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./app/navigation/root-navigation";
import { Provider } from "react-redux";
import rootStore from "./app/model/state/root-store";

function App(): React.JSX.Element {

	return (
		<SafeAreaProvider>
			<Provider store={rootStore}>
				<RootNavigation />
			</Provider>
		</SafeAreaProvider>
	);
}

export default App;
