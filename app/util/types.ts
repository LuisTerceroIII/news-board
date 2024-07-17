import { ErrorsType } from "../dictionary/es";

export interface ErrorInputTx {
    errorLabel: ErrorsType
    tx: string
}
export interface ErrorInput {
    state: boolean
    errorsTx: ErrorInputTx[]
}
export enum ReqState {
    IDLE = "idle",
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}