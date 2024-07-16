import { Auth } from "./auth";
import { InteractionsRepository } from "../use-cases/interactions/interactions-repository";
import { Person } from "./person";

export class User extends Person {

    #interactions: InteractionsRepository

    constructor(username: string="", name: string="", lastName: string="", email: string="", imageURL: string="") {
        super(username, name, lastName, email, imageURL)
        this.#interactions = new InteractionsRepository()
    }

    get getUserInteractions(): InteractionsRepository {
        return this.#interactions
    }
}