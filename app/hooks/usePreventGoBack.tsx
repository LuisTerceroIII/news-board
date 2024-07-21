import { useEffect } from "react"
import { BackHandler } from "react-native"

export const usePreventGoBack = () => {
    useEffect(() => {

        const handleBackButton = () => {
            return true//return true to avoid go back
        }
        BackHandler.addEventListener('hardwareBackPress', handleBackButton)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
        }
    }, [])
}