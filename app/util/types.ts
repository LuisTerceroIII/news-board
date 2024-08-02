import { Interest } from "@app/model/entities/interest";
import { ErrorsTx } from "@dictionary/es";

export interface ErrorInputTx {
    errorLabel: ErrorsTx
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
export const MixInterest: Interest = {
    id: "MIX",
    keyword: "Mix",
    label: "Mix"
}