import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {useEffect} from "react";
import {fetchTVShowDetailedInfo} from "../../store/thunks/TVShows/TvShowsThunks.ts";
import {chosenFetchShowLoading} from "../../store/slices/TVShowsSlice.ts";

const DemonstrateTvShowDetailedInformation = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const addLoading = useAppSelector(chosenFetchShowLoading);
    const chosenShow = useSelector((state: RootState) => state.TVShows.chosenShow);
    console.log(chosenShow);

    useEffect(() => {
        if (id) {
            dispatch(fetchTVShowDetailedInfo(id));
        }
    }, [id, dispatch]);

    return (
        <div>
            <h1> {chosenShow.name}</h1>
            <p>{chosenShow.summary}</p>
            <img src={chosenShow.image.medium} alt={chosenShow.name}/>
            <ul>
                <li>Language: {chosenShow.language} </li>
                <li>Premiered: {chosenShow.premiered}</li>
                <li>Genres: {chosenShow.genres.join(' , ')}</li>
            </ul>
        </div>
    );
};

export default DemonstrateTvShowDetailedInformation;