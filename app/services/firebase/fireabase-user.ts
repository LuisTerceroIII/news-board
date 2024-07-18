import { User } from '@app/model/entities/user';
import firestore from '@react-native-firebase/firestore';
import { FirebaseCollections } from './collections-names';

export class FbUserAPI {
    constructor() { }

    usersCollection = firestore().collection(FirebaseCollections.USERS)

    async userExist(userId: string) {
        return await this.usersCollection.where("id", "==", userId).limit(1).get().then(snap => snap.empty === false)
    }

    async addUser(user: User) {
        return await this.usersCollection.doc(user.id).set({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            photoURL: user.photoURL,
            registerAt: user.registerAt
        })
    }
}