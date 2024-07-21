import { FC } from "react"
import { AppStore, useAppDispatch } from "@model/state/root-store"
import { ScreenNavigationProps } from "@navigation/index"
import { ScrollView, StyleSheet } from "react-native"
import { palette } from "@app/theme"
import { Button, Text, TextVariant, UserAvatar } from "@components/index"
import { useSelector } from "react-redux"
import { SlicesNames } from "@app/model/state/slices-names"
import { signOutAsync } from "@app/model/state/auth/auth-async-actions"

export const UserProfile: FC<ScreenNavigationProps> = ({route, navigation}) => {
	
	const dispatch = useAppDispatch()
	const { email, fullName } = useSelector(( state: AppStore ) => state?.[SlicesNames.USER])
	console.log("🚀 ~ fullName:", fullName)
	const signOut = () => dispatch(signOutAsync())

	return (
		<ScrollView
            contentContainerStyle={styles.box}
            showsVerticalScrollIndicator={false}
        >
            <UserAvatar size={90} iconColor={palette.primary}/>
            <Text tx={fullName} variant={TextVariant.SUBTITLE} />
            <Text tx={email} variant={TextVariant.PARAGRAPH} />
            <Button style={{ alignSelf: "center" }} tx="Cerrar session" onPress={signOut} />

		</ScrollView>
	)
}

const styles = StyleSheet.create({
    box: {
        flexGrow: 1,
        backgroundColor: palette.bg_primary,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 20
    }
})
