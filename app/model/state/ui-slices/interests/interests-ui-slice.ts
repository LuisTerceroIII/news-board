import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { Interest } from "@app/model/entities/interest";
import { getNowTimestamp } from "@app/util/date";

interface InterestsUIState {
	interests: Interest[]
}

const initialState: InterestsUIState = {
	interests: []
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
				state.interests?.push({
					id: action.payload.id,
					keyword: action.payload.keyword,
					lastDateRequests: getNowTimestamp(),
					registerAt: getNowTimestamp()
				})
			}
		}
	}
})

export const { setInterests, toggleInterest } = InterestUISlice.actions
export default InterestUISlice.reducer