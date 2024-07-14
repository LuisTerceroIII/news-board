import { Auth } from "../../entities/auth";

export class AuthRepository {
    
    #auth: Auth;

    constructor(auth: Auth) {
        this.#auth = auth
    }

    getAuth() { return this.#auth }

}