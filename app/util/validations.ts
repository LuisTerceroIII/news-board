
//if return true is valid, false is not valid


export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function validatePasswordLong(password: string): boolean {
    return password.length >= 8
}

export function validatePasswordUppercase(password: string): boolean {
    return /[A-Z]/.test(password)
}

export function validateRepeatedPassword(password: string, repeatedPassword: string): boolean {
    return password === repeatedPassword
}

export function validateNotEmpty(str: string) {
    return str?.length > 0
}
