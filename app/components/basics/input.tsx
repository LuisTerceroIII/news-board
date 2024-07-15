import React, { FC } from "react";
import { KeyboardType, StyleSheet, TextInput, ViewStyle } from "react-native";

interface InputProps {
	ref?: any;
	onChangeText: (s:string) => void;
	value: string;
	onBlur?: () => void;
	onFocus?: () => void;
	style?: ViewStyle
	keyboardType?: KeyboardType
	placeholderTx?: string
	onSubmitEditing?: () => void
}
const styles = StyleSheet.create({
	input: {
	  height: 38,
	  borderWidth: 2,
	  padding: 10,
	  borderRadius: 12,
	  width: "100%"
	},
  });

export const Input: FC<InputProps> = (props) => {
	
	const { ref, onChangeText, value, onBlur, onFocus, onSubmitEditing, style } = props

	return (
		<TextInput
			ref={ref}
			value={value}
			onChangeText={onChangeText}
			onBlur={onBlur}
			onFocus={onFocus}
			style={[styles.input, style]}
			onSubmitEditing={onSubmitEditing}
		/>
	)
};
