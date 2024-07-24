import { FirebaseAPI } from "./firebase/firebase-api"
import { GNewsAPI } from "./news-apis/g-news-api/g-news-api"
import { TheNewsAPI } from "./news-apis/the-news-api/the-news-api"
class API {
    gNewsAPI: GNewsAPI
    firebaseAPI: FirebaseAPI
    theNewsAPI: TheNewsAPI

    constructor() {
        this.gNewsAPI = new GNewsAPI()
        this.theNewsAPI = new TheNewsAPI()
        this.firebaseAPI = new FirebaseAPI()
    }
}

const singletonAPI = new API()

Object.freeze(singletonAPI)

export const api = singletonAPI
