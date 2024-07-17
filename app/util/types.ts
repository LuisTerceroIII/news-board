import { ErrorsType } from "../dictionary/es";

export interface ErrorInput {
    state: boolean,
    errorsTx?: {errorLabel: ErrorsType, tx: string}[]
}