import { FirebaseAPI } from "./firebase/firebase-api"
import { GNewsAPI } from "./g-news-api/g-news-api"

class API {
    gNewsAPI: GNewsAPI
    firebaseAPI: FirebaseAPI

    constructor() {
        this.gNewsAPI = new GNewsAPI()
        this.firebaseAPI = new FirebaseAPI()
    }
}

const singletonAPI = new API()

Object.freeze(singletonAPI)

export const api = singletonAPI
