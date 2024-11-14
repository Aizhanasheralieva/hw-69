import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchSuggestions = createAsyncThunk<  IShows[], string>(
    'TVShows/fetchSuggestions',
    async (showToSuggest) => {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${showToSuggest}`);
        const data = await response.json();
        console.log(data);

        const specificFormatShows = data.map((oneShow: ApiShow) => ({
            id: oneShow.show.id,
            name: oneShow.show.name
        }));


        return specificFormatShows;
    });

export const fetchTVShowDetailedInfo = createAsyncThunk<  IShowsDetails, string>(
    'TVShows/fetchTVShowDetailedInfo',
    async (id) => {
        const response = await fetch (`http://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    }
);
