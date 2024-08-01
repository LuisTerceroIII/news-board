import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { SvgIcon, Text, TextVariant } from '@components/index'
import { palette, width } from '@app/theme'
interface HeaderProps {
    tx?: string
    onPress?: () => void
    style?: ViewStyle
}
export const Header: FC<HeaderProps> = (props) => {

    const { tx, onPress, style } = props

    return (
        <View style={[styles.box, style]}>
            <SvgIcon
                icon="goBack"
                width={25}
                linesColor={palette.secondary}
                onPress={onPress}
            />
            <Text variant={TextVariant.TITLE} tx={tx} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        flexDirection: "row",
        height: 60,
    }
})
