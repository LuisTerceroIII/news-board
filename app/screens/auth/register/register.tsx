import React, { FC, useEffect, useRef } from "react";
import { ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
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
import { AuthErrorType, checkRegisterError, hasEmptyRegisterField, hasPendingRegisterErrors, registerEmailPassAsync, enterUsingGoogleAsync, resetAuthForm, setEmail, setPassword, setRepeatPassword, setUsername } from "../../../model/state/auth-slice";
import { GoogleButton } from "../google-button";
import { ScreenNames } from "../../../navigation/screen-names";
import { ReqState } from "../../../util/types";

export const RegisterScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const usernameRef = useRef<TextInput>(null)
	const emailRef = useRef<TextInput>(null)
	const passRef = useRef<TextInput>(null)
	const repeatPassRef = useRef<TextInput>(null)

	const dispatch = useAppDispatch()

	const { username, email, password, repeatedPassword, submitState } = useSelector((state: AppStore) => state.authSlice)
	const { usernameError, emailError, passError, repeatedPassError } = useSelector((state: AppStore) => state.authSlice)
	const hasPendingErrors = useSelector(hasPendingRegisterErrors)
	const hasEmptyField = useSelector(hasEmptyRegisterField)

	useEffect(() => {
		return () => {
			dispatch(resetAuthForm())
		}
	}, [])

	const onChangeUsername = (str: string) => {
		dispatch(setUsername({ username: str }))
		if (usernameError.state) dispatch(checkRegisterError({ error: AuthErrorType.USERNAME }))
	}
	const onChangeEmail = (str: string) => {
		dispatch(setEmail({ email: str }))
		if (emailError.state) dispatch(checkRegisterError({ error: AuthErrorType.EMAIL }))

	}
	const onChangePassword = (str: string) => {
		dispatch(setPassword({ password: str }))
		if (passError.state) dispatch(checkRegisterError({ error: AuthErrorType.PASS }))
	}
	const onChangeRepeatPass = (str: string) => {
		dispatch(setRepeatPassword({ password: str }))
		if (repeatedPassError.state) dispatch(checkRegisterError({ error: AuthErrorType.REPEAT_PASS }))
	}
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
		dispatch(checkRegisterError({ error: AuthErrorType.ALL }))
		if (!hasPendingErrors && !hasEmptyField) {
			dispatch(registerEmailPassAsync())
		}
	}
	const enterUsingGoogle = () => dispatch(enterUsingGoogleAsync())
	const goToLogin = () => navigation.navigate(ScreenNames.LOGIN)

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
				tx={dictionary.auth?.register_title}
				variant={TextVariant.LOGO_SUBTITLE}
			/>
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
				<GoogleButton
					tx={dictionary.auth?.register_using_google || ""}
					onPress={enterUsingGoogle}
				/>
				<Button
					tx={dictionary.auth?.register_button}
					onPress={submitRegisterForm}
				/>
				<View style={styles.toLoginBox}>
					<Text
						tx={dictionary.auth?.already_has_account}
						variant={TextVariant.PARAGRAPH}
					/>
					<TouchableOpacity onPress={goToLogin}>
						<Text
							tx={dictionary.auth?.log_in_option}
							variant={TextVariant.LINK}
						/>
					</TouchableOpacity>
				</View>
				{submitState === ReqState.PENDING && <ActivityIndicator size={"large"} />}
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
	toLoginBox: {
		flexDirection: "row",
		columnGap: 10
	}
})

export default RegisterScreen;
