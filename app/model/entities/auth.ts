export class Auth {
    #isLogin: boolean

    constructor(isLogin: boolean) {
        this.#isLogin = isLogin
    }

    get isLogin(): boolean {
        return this.#isLogin
    }

    set setIsLogin(loginState: boolean) {
        this.#isLogin = loginState
    }
}