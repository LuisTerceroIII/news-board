import { useSelector } from "react-redux"
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import React, { FC, useEffect, useRef } from "react"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActiveWordTitle, FormField, Text, Button, TextVariant, LoadingOverlay } from "@components/index"
import { GoogleButton } from "../google-button"
import { spacing, palette } from "@theme/index"
import { dictionary } from "@dictionary/dictionary"
import { ErrorInputTx, ReqState } from "@util/types"
import { ScreenNames, ScreenNavigationProps } from "@navigation/index"
import { AppStore, useAppDispatch } from "@model/state/root-store"
import { AuthErrorType, checkRegisterError, resetAuthForm, setEmail, setPassword, setRepeatPassword, setUsername } from "@model/state/auth/auth-slice"
import { hasEmptyRegisterField, hasPendingRegisterErrors } from "@model/state/auth/auth-views"
import { enterUsingGoogleAsync, registerEmailPassAsync } from "@model/state/auth/auth-async-actions"

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
			dispatch(registerEmailPassAsync({goToInterests: () => navigation.navigate(ScreenNames.INTERESTS_ON_BOARDING)}))
		}
	}
	const enterUsingGoogle = () => {
		dispatch(enterUsingGoogleAsync({
			goHome: () => navigation.navigate(ScreenNames.HOME),
			goToInterests: () => navigation.navigate(ScreenNames.INTERESTS_ON_BOARDING)
		}))
	}
	const goToLogin = () => {
		navigation?.navigate(ScreenNames.LOGIN)
		dispatch(resetAuthForm())
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
					errorsTx={emailError.errorsTx?.map((err: ErrorInputTx) => err.tx)}
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
					errorsTx={passError.errorsTx?.map((err: ErrorInputTx) => err.tx)}
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
					errorsTx={repeatedPassError.errorsTx?.map((err: ErrorInputTx) => err?.tx)}
					secureTextEntry
					onSubmitEditing={submitRegisterForm}
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
			</View>
		<LoadingOverlay visible={submitState === ReqState.PENDING}/>
		</KeyboardAwareScrollView>
	)
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

export default RegisterScreen
