import {createSlice} from "@reduxjs/toolkit";

interface TVShowsSliceState {
    shows: IShows[],
    chosenShow: IShows | null;
    loadings: {
        showsFetching: boolean;
        showsAdding: boolean;
    }
}
const initialState: TVShowsSliceState = {
    shows: [],
    chosenShow: null,
    loadings: {
        showsFetching: false,
        showsAdding: false,
    }
};

export const TVShowsSlice = createSlice({
    name: 'TVShows',
    initialState,
    reducers: {}
});

export const TVShowsReducer = TVShowsSlice.reducer;
// export const {} = TVShowsSlice.actions;