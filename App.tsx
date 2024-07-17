import React, { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import RootNavigation from "./app/navigation/root-navigation"
import { Provider, useDispatch } from "react-redux"
import rootStore from "./app/model/state/root-store"
import auth from '@react-native-firebase/auth'
import { onAuthStateChange } from "./app/model/state/auth-slice"

//Inner components to initialize auth state
const AuthState = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		const subscriber = auth().onAuthStateChanged((user) => dispatch(onAuthStateChange(user)))
		return subscriber // unsubscribe on unmount
	}, [])
	return <></>
}

function App(): React.JSX.Element {
	

	return (
		<SafeAreaProvider>
			<Provider store={rootStore}>
				<RootNavigation />
				<AuthState />
			</Provider>
		</SafeAreaProvider>
	)
}

export default App
