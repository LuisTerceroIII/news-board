import React, { FC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface HeadingProps {
  variant: "title" | "subTitle";
  tx: string;
  style?: TextStyle
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 800,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 800,
  },
});

export const Heading: FC<HeadingProps> = (props) => {
    const {variant, tx, style } = props
    return <Text style={[styles[variant],style]}>{tx}</Text>
};
