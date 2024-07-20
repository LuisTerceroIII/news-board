import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { Interest } from "@app/model/entities/interest";
import { getNowTimestamp } from "@app/util/date";
import { saveUserInterestsAsync } from "./interests-async-actions";
import { ReqState } from "@util/types";

interface InterestsUIState {
	interests: Interest[]
	reqState: ReqState
	onSaveInterestsCallback?: () => void
}

const initialState: InterestsUIState = {
	interests: [],
	reqState: ReqState.IDLE
}

export const InterestUISlice = createSlice({
	name: SlicesNames.INTERESTS_UI,
	initialState,
	reducers: {
		setInterests: (state, action: PayloadAction<Interest[]>) => {
			state.interests = action.payload
		},
		toggleInterest: (state, action: PayloadAction<Interest>) => {
			const interestIsSelected = state.interests?.find(selectedInterest => selectedInterest?.id === action.payload.id)
			if (interestIsSelected) state.interests = state.interests?.filter(selectedInterest => selectedInterest?.id !== action.payload.id)
			else {
				state.interests = [...state.interests, {
					id: action.payload.id,
					keyword: action.payload.keyword,
					lastDateRequests: getNowTimestamp(),
					registerAt: getNowTimestamp()
				}]
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(saveUserInterestsAsync.pending, (state, action) => {
				state.reqState = ReqState.PENDING
			})
			.addCase(saveUserInterestsAsync.fulfilled, (state, action) => {
				state.reqState = ReqState.IDLE
			})
			.addCase(saveUserInterestsAsync.rejected, (state, action) => {
				state.reqState = ReqState.FAILED
			})
	}
})

export const {
	setInterests,
	toggleInterest
} = InterestUISlice.actions
export default InterestUISlice.reducer