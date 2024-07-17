import { ErrorsType } from "../dictionary/es";

export interface ErrorInput {
    state: boolean
    errorsTx: {errorLabel: ErrorsType, tx: string}[]
}
export enum ReqState {
    IDLE = "idle",
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}