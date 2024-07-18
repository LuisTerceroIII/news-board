import { FbAuthAPI } from "./fireabase-auth";

export class FirebaseAPI {
    authAPI: FbAuthAPI

    constructor() {
        this.authAPI = new FbAuthAPI()
    }
}