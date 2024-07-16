import { TextStyle } from "react-native"

interface FontType {
    title: TextStyle
    subTitle: TextStyle
    paragraph: TextStyle
}

export const fontFamily = {
    nunito: {
        regular: "Nunito-Regular",
        semiBold: "Nunito-SemiBold",
        bold: "Nunito-Bold",
        extraBold: "Nunito-ExtraBold",
    },
    jomolhari: {
        regular: "Jomolhari-Regular"
    }
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
        fontSize: 18,
        fontWeight: 400,
        fontFamily: fontFamily.nunito.regular
    }
}