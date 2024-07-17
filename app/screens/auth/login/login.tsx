import React, { FC, useEffect, useRef } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ScreenNavigationProps } from "../../../navigation/routes";
import { useSelector } from "react-redux";
import { palette } from "../../../theme/palette";
import { ActiveWordTitle } from "../../../components/shared/active-word-title";
import { dictionary } from "../../../dictionary/dictionary";
import { spacing } from "../../../theme/spacing";
import { FormField } from "../../../components/basics/form-field";
import { Text, TextVariant } from "../../../components/basics/text";
import { Button } from "../../../components/basics/button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppStore, useAppDispatch } from "../../../model/state/root-store";
import { AuthErrorType, checkLoginError, enterUsingGoogleAsync, resetAuthForm, setEmail, setPassword, setRepeatPassword, setUsername } from "../../../model/state/auth/auth-slice";
import { GoogleButton } from "../google-button";
import { ScreenNames } from "../../../navigation/screen-names";

export const LoginScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const emailRef = useRef<TextInput>(null)
	const passRef = useRef<TextInput>(null)

	const dispatch = useAppDispatch()

	const { email, password } = useSelector((state: AppStore) => state.authSlice)
	const { emailError, passError } = useSelector((state: AppStore) => state.authSlice)

	useEffect(() => {
		return () => {
			dispatch(resetAuthForm())
		}
	}, [])

	const onChangeEmail = (str: string) => {
		dispatch(setEmail({ email: str }))
		if (emailError.state) dispatch(checkLoginError({ error: AuthErrorType.EMAIL }))

	}
	const onChangePassword = (str: string) => {
		dispatch(setPassword({ password: str }))
		if (passError.state) dispatch(checkLoginError({ error: AuthErrorType.PASS }))
	}
	const focusPass = () => {
		setTimeout(() => {
			passRef.current?.focus()
		}, 200)
	}
	const submitRegisterForm = () => dispatch(checkLoginError({ error: AuthErrorType.ALL }))
	const enterUsingGoogle = () => dispatch(enterUsingGoogleAsync())

	const goToRegister = () => navigation.navigate(ScreenNames.REGISTER)

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={styles.box}
			extraScrollHeight={20}
			extraHeight={20}
		>
			<ActiveWordTitle
				txChain={[
					dictionary.welcomeOnBoarding?.slide_one_title_1 || "",
					dictionary.welcomeOnBoarding?.slide_one_title_2 || ""
				]}
			/>
			<Text
				tx={dictionary.auth?.login_title}
				variant={TextVariant.LOGO_SUBTITLE}
			/>
			<View style={styles.formBox}>
				{/* Email */}
				<FormField
					ref={emailRef}
					labelTx={dictionary.auth?.email_label || ""}
					value={email}
					onChangeText={onChangeEmail}
					error={emailError.state}
					errorsTx={emailError.errorsTx?.map(err => err.tx)}
					onSubmitEditing={focusPass}
					keyboardType="email-address"
				/>
				{/* Password */}
				<FormField
					ref={passRef}
					labelTx={dictionary.auth?.password_label || ""}
					value={password}
					onChangeText={onChangePassword}
					error={passError.state}
					errorsTx={passError.errorsTx?.map(err => err.tx)}
					secureTextEntry
				/>
				<GoogleButton
					tx={dictionary.auth?.login_using_google || ""}
					onPress={enterUsingGoogle}
				/>
				<Button
					tx={dictionary.auth?.login_button}
					onPress={submitRegisterForm}
				/>
				<View style={styles.toRegisterBox}>
					<Text
						tx={dictionary.auth?.not_has_account}
						variant={TextVariant.PARAGRAPH}
					/>
					<TouchableOpacity onPress={goToRegister}>
						<Text
							tx={dictionary.auth?.register_title}
							variant={TextVariant.LINK}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: palette.primary,
		alignItems: "center",
		paddingTop: spacing.paddingTop[0],
		paddingBottom: spacing.paddingBottom[2],
		flexGrow: 1
	},
	formBox: {
		alignItems: "center",
		rowGap: 22,
		marginTop: 20,
	},
	toRegisterBox: {
		flexDirection: "row",
		columnGap: 10
	}
})

export default LoginScreen;
