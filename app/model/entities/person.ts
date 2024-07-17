import uuid from 'react-native-uuid';

export class Person {

    #id: string;
    username: string;
    name: string;
    lastName: string;
    email: string;
    registerAt: string; // timestamp format
    photoURL: string;

    constructor(
        username: string, 
        name: string, 
        lastName: string,
        email: string,
        photoURL: string
    ) {
        this.#id = ""
        this.username = username || ""
        this.name = name || ""
        this.lastName = lastName  || ""
        this.email = email 
        this.registerAt = ""
        this.photoURL = photoURL  || ""
    }

    getId() {
        return this.#id
    }

    setId(id: string) {
        this.#id = id
    }

}