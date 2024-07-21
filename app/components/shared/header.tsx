import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, SvgIcon, Text, TextVariant, UserAvatar } from '@components/index'
import { useSelector } from 'react-redux'
import { getKeyword, onChangeKeyword } from '@app/model/state/ui-slices/search-article-slice'
import { useAppDispatch } from '@app/model/state/root-store'
import { navigate, ScreenNames } from '@app/navigation'
import { palette, reponsiveW, width } from '@app/theme'
import { dictionary } from '@app/dictionary/dictionary'

interface HeaderProps {
    tx?: string
    onPress?: () => void
}
export const Header: FC<HeaderProps> = (props) => {

    const { tx, onPress } = props

    return (
        <View style={styles.box}>
            <SvgIcon
                icon="goBack"
                width={30}
                linesColor={palette.white}
                onPress={onPress}
            />
            <Text variant={TextVariant.TITLE} tx={tx} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: palette.primary,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        columnGap: reponsiveW("5%"),
        height: 78,
        shadowOpacity: 0
    }
})
