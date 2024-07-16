import { FC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { font } from "../../theme/font";
interface ParagraphProps {
  tx?: string;
  style?: TextStyle
  numberOfLines?: number
}

const styles = StyleSheet.create({
  message: {
    ...font.paragraph
  },
});

export const Paragraph: FC<ParagraphProps> = (props) => {
    
    const { tx, numberOfLines=undefined, style } = props
    
    return <Text style={[styles.message, style]} numberOfLines={numberOfLines}>{tx}</Text>
};
