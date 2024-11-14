import { createSlice } from "@reduxjs/toolkit";
import {fetchSuggestions} from "../thunks/TVShows/TvShowsThunks.ts";
import {RootState} from "../../app/store.ts";

interface TVShowsSliceState {
  shows: IShows[];
  chosenShow: IShows | null;
  loadings: {
    showsFetching: boolean;
    showsAdding: boolean;
  };
}
const initialState: TVShowsSliceState = {
  shows: [],
  chosenShow: null,
  loadings: {
    showsFetching: false,
    showsAdding: false,
  },
};

export const selectAddShowLoading = (state: RootState) => state.TVShows.loadings.showsFetching;

export const TVShowsSlice = createSlice({
  name: "TVShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchSuggestions.pending, (state) => {
          state.loadings.showsFetching = true;
        })
        .addCase(fetchSuggestions.fulfilled, (state, action) => {
          state.loadings.showsFetching = false;
          state.shows = action.payload;

        })
        .addCase(fetchSuggestions.rejected, (state) => {
          state.loadings.showsFetching = false;
        });
  }
});

export const TVShowsReducer = TVShowsSlice.reducer;
// export const {} = TVShowsSlice.actions;
