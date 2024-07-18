import { FbAuthAPI } from "./fireabase-auth";
import { FbUserAPI } from "./fireabase-user";
export class FirebaseAPI {
    authAPI: FbAuthAPI
    userAPI: FbUserAPI

    constructor() {
        this.authAPI = new FbAuthAPI()
        this.userAPI = new FbUserAPI()
    }
}