import uuid from 'react-native-uuid';

export class Person {

    #id: string;
    username: string;
    name: string;
    lastName: string;
    email: string;
    registerAt: Date;
    imageURL: string;

    constructor(
        username: string, 
        name: string, 
        lastName: string,
        email: string,
        imageURL: string
    ) {
        this.#id = String(uuid.v4())
        this.username = username || ""
        this.name = name || ""
        this.lastName = lastName  || ""
        this.email = email 
        this.registerAt = new Date()
        this.imageURL = imageURL  || ""
    }

    getId() {
        return this.#id
    }
}