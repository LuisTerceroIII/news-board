import { GNewsAPI } from "./g-news-api/g-news-api";

class API {
    gNewsApi: GNewsAPI;

    constructor() {
        this.gNewsApi = new GNewsAPI()
    }
}

const singletonAPI = new API()

Object.freeze(singletonAPI)

export const api = singletonAPI
