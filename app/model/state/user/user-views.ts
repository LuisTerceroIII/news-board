import { AppStore } from "../root-store";
import { SlicesNames } from "../slices-names";

export const hasInterests = (state: AppStore) => state[SlicesNames.USER].interests?.length > 0