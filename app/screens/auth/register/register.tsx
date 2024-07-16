import React, { FC } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import { ScreenNavigationProps } from "../../../navigation/routes";
import { useDispatch } from "react-redux";
import { palette } from "../../../theme/palette";
import { ActiveWordTitle } from "../../../components/shared/active-word-title";
import { dictionary } from "../../../dictionary/dictionary";
import { spacing } from "../../../theme/spacing";
import { FormField } from "../../../components/basics/form-field";
import { Text, TextVariant } from "../../../components/basics/text";
import { Button } from "../../../components/basics/button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const RegisterScreen: FC<ScreenNavigationProps> = ({ navigation }): React.JSX.Element => {

	const dispatch = useDispatch()

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
					labelTx={dictionary.auth?.username_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				{/* Email */}
				<FormField
					labelTx={dictionary.auth?.email_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				{/* Password */}
				<FormField
					labelTx={dictionary.auth?.password_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				{/* Password Repeat */}
				<FormField
					labelTx={dictionary.auth?.confirm_pass_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				<Button
					tx={dictionary.auth?.register_button}
					onPress={() => console.log("asdas")}
				/>

				<FormField
					labelTx={dictionary.auth?.username_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				{/* Email */}
				<FormField
					labelTx={dictionary.auth?.email_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				{/* Password */}
				<FormField
					labelTx={dictionary.auth?.password_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
				/>
				{/* Password Repeat */}
				<FormField
					labelTx={dictionary.auth?.confirm_pass_label || ""}
					value="asdas"
					onChangeText={() => console.log("Hola")}
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
	},
	formBox: {
		alignItems: "center",
		rowGap: 22,
		marginTop: 20,
	}
})

export default RegisterScreen;
