import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const spacing = {
    paddingTop: [
        wp("10%"),
        wp("5%")
    ],
    paddingBottom: [
        wp("10%"),
        wp("20%"),
        wp("30%")

    ],
    paddingHorizontal: wp("2%")
}

export const corners = [
    8,
    12,
    16,
    19
]

export const width = [
    wp("5%"),
    wp("10%"),
    wp("20%"),
    wp("30%"),
    wp("40%"),
    wp("50%"),
    wp("60%"),
    wp("70%"),
    wp("80%"),
    wp("90%"),
    wp("100%")
]

export const reponsiveW = (n: string) => wp(n)
export const reponsiveH = (n: string) => hp(n)

