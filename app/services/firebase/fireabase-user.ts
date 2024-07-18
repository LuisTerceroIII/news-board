import { User } from '@app/model/entities/user';
import firestore from '@react-native-firebase/firestore';
import { FirebaseCollections } from './collections-names';

export class FbUserAPI {
    constructor() { }

    usersCollection = firestore().collection(FirebaseCollections.USERS)

    async addUser(user: User) {
        return await this.usersCollection.doc(user.id).set({
            fullName: user.fullName,
            email: user.email,
            photoURL: user.photoURL,
            registerAt: user.registerAt
        })
    }
}