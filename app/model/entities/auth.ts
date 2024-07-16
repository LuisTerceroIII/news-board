export class Auth {
    isLogin: boolean
    email: string
    provider: string

    constructor(isLogin: boolean) {
        this.isLogin = isLogin
        this.email = ""
        this.provider = ""
    }

    set setIsLogin(loginState: boolean) {
        this.isLogin = loginState
    }

    setProvider(provider: string) {
        this.provider = provider
    }

    setEmail(email: string) {
        this.email = email
    }
}