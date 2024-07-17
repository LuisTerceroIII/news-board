import React, { FC, useRef } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { ScreenNavigationProps } from "../../../navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { palette } from "../../../theme/palette";
import { ActiveWordTitle } from "../../../components/shared/active-word-title";
import { dictionary } from "../../../dictionary/dictionary";
import { spacing } from "../../../theme/spacing";
import { FormField } from "../../../components/basics/form-field";
import { Text, TextVariant } from "../../../components/basics/text";
import { Button } from "../../../components/basics/button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppStore } from "../../../model/state/root-store";
import { checkRegisterError, setEmail, setPassword, setRepeatPassword, setUsername } from "../../../model/state/auth-slice";

export const RegisterScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const usernameRef = useRef<TextInput>(null)
	const emailRef = useRef<TextInput>(null)
	const passRef = useRef<TextInput>(null)
	const repeatPassRef = useRef<TextInput>(null)


	const dispatch = useDispatch()

	const { username, email, password, repeatedPassword } = useSelector((state: AppStore) => state.authSlice)
	const { usernameError, emailError, passError, repeatedPassError } = useSelector((state: AppStore) => state.authSlice)

	const onChangeUsername = (str: string) => {
		dispatch(setUsername({ username: str }))
		if(usernameError.state) {
			dispatch(checkRegisterError())
		} 
	}
	const onChangeEmail = (str: string) => dispatch(setEmail({ email: str }))
	const onChangePassword = (str: string) => dispatch(setPassword({ password: str }))
	const onChangeRepeatPass = (str: string) => dispatch(setRepeatPassword({ password: str }))

	const focusEmail = () => {
		setTimeout(() => {
			emailRef.current?.focus()
		}, 200)
	}
	const focusPass = () => {
		setTimeout(() => {
			passRef.current?.focus()
		}, 200)
	}
	const focusRepeatPass = () => {
		setTimeout(() => {
			repeatPassRef.current?.focus()
		}, 200)
	}

	const submitRegisterForm = () => {
		dispatch(checkRegisterError())
	}

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
			<Text tx={dictionary.auth?.register_title} variant={TextVariant.LOGO_SUBTITLE} />

			<View style={styles.formBox}>
				{/* Username */}
				<FormField
					ref={usernameRef}
					labelTx={dictionary.auth?.username_label || ""}
					value={username}
					onChangeText={onChangeUsername}
					error={usernameError.state}
					onSubmitEditing={focusEmail}
				/>
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
					onSubmitEditing={focusRepeatPass}
					secureTextEntry
				/>
				{/* Password Repeat */}
				<FormField
					ref={repeatPassRef}
					labelTx={dictionary.auth?.confirm_pass_label || ""}
					value={repeatedPassword}
					onChangeText={onChangeRepeatPass}
					error={repeatedPassError.state}
					errorsTx={repeatedPassError.errorsTx?.map(err => err.tx)}
					secureTextEntry
				/>
				<Button
					tx={dictionary.auth?.register_button}
					onPress={submitRegisterForm}
				/>
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
	}
})

export default RegisterScreen;
