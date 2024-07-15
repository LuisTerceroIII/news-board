import { TextStyle } from "react-native"

interface FontType {
    title: TextStyle
    subTitle: TextStyle
    paragraph: TextStyle
}

export const font: FontType = {
    title: {
        fontSize: 22,
        fontWeight: 800
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 700
    },
    paragraph: {
        fontSize: 16,
        fontWeight: 500
    }
}
