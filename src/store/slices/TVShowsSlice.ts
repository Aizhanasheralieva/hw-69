import { createSlice } from "@reduxjs/toolkit";
import {fetchSuggestions, fetchTVShowDetailedInfo} from "../thunks/TVShows/TvShowsThunks.ts";
import {RootState} from "../../app/store.ts";

interface TVShowsSliceState {
  shows: IShows[];
  chosenShow: IShowsDetails;
  loadings: {
    showsFetching: boolean;
  };
}
const initialState: TVShowsSliceState = {
  shows: [],
  chosenShow: [],
  loadings: {
    showsFetching: false,
  },
};

export const selectFetchShowLoading = (state: RootState) => state.TVShows.loadings.showsFetching;
export const chosenFetchShowLoading = (state: RootState) => state.TVShows.loadings.showsFetching;
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
        })
        .addCase(fetchTVShowDetailedInfo.pending, (state) => {
          state.loadings.showsFetching = true;
        })
        .addCase(fetchTVShowDetailedInfo.fulfilled, (state, action) => {
          state.loadings.showsFetching = false;
          state.chosenShow= action.payload;

        })
        .addCase(fetchTVShowDetailedInfo.rejected, (state) => {
          state.loadings.showsFetching = false;
        });
  }
});

export const TVShowsReducer = TVShowsSlice.reducer;
// export const {} = TVShowsSlice.actions;
