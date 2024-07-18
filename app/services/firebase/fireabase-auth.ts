import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

export class FbAuthAPI {
    constructor(){}
    
    async doCreateUserWithEmailAndPassword (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
		return await auth().createUserWithEmailAndPassword(email, password)
	}
    async doSignInWithEmailAndPassword (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
		return await auth().signInWithEmailAndPassword(email, password)
	}
    async doSignOut(): Promise<any> {
		return await auth().signOut()
	}
    async signInWithGoogle(): Promise<FirebaseAuthTypes.UserCredential> {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn()
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        // Sign-in the user with the credential
        return await auth().signInWithCredential(googleCredential)
    }
}