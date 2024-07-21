import { useSelector } from "react-redux"
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import React, { FC, useEffect, useRef, useState } from "react"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActiveWordTitle, FormField, Text, TextVariant, Button, LoadingOverlay } from "@components/index"
import { GoogleButton } from "../google-button"
import { ScreenNavigationProps } from "@navigation/routes"
import { palette, spacing } from "@theme/index"
import { dictionary } from "@dictionary/dictionary"
import { AppStore, useAppDispatch } from "@model/state/root-store"
import { AuthErrorType, checkLoginError, resetAuthForm, setEmail, setPassword } from "@model/state/auth/auth-slice"
import { ScreenNames } from "@navigation/index"
import { ErrorInputTx, ReqState } from "@util/types"
import { enterUsingEmailPassAsync, enterUsingGoogleAsync } from "@model/state/auth/auth-async-actions"
import { hasEmptyLoginField, hasPendingLoginErrors } from "@model/state/auth/auth-views"

export const LoginScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const emailRef = useRef<TextInput>(null)
	const passRef = useRef<TextInput>(null)

	const dispatch = useAppDispatch()

	const { email, password, submitState } = useSelector((state: AppStore) => state.authSlice)
	const { emailError, passError } = useSelector((state: AppStore) => state.authSlice)
	const hasPendingErrors = useSelector(hasPendingLoginErrors)
	const hasEmptyField = useSelector(hasEmptyLoginField)
	const [showPass, setShowPass] = useState(false)

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
	const submitLoginForm = () => {
		dispatch(checkLoginError({ error: AuthErrorType.ALL }))
		if (!hasPendingErrors && !hasEmptyField) {
			dispatch(enterUsingEmailPassAsync({
				goHome: () => navigation.navigate(ScreenNames.HOME),
				goToInterests: () => navigation.navigate(ScreenNames.INTERESTS_ON_BOARDING)
			}))
		}
	}
	const enterUsingGoogle = () => {
		dispatch(enterUsingGoogleAsync({
			goHome: () => navigation.navigate(ScreenNames.HOME),
			goToInterests: () => navigation.navigate(ScreenNames.INTERESTS_ON_BOARDING)
		}))
	}
	const goToRegister = () => {
		navigation?.navigate(ScreenNames.REGISTER)
		dispatch(resetAuthForm())
	}
	const togglePass = () => setShowPass(prev => !prev)

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
				style={{color: palette.primary}}
			/>
			<View style={styles.formBox}>
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
					secureTextEntry={!showPass}
					rightIcon={showPass ? "eyeOpen" : "eyeClose"}
					rightIconColor={palette.primary}
					onSubmitEditing={submitLoginForm}
					rightIconOnPress={togglePass}
				/>
				<GoogleButton
					tx={dictionary.auth?.login_using_google || ""}
					onPress={enterUsingGoogle}
				/>
				<Button
					tx={dictionary.auth?.login_button}
					onPress={submitLoginForm}
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
			<LoadingOverlay visible={submitState === ReqState.PENDING} />
		</KeyboardAwareScrollView>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: palette.bg_primary,
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

export default LoginScreen
