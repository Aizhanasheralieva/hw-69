import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import { useEffect } from "react";
import { fetchTVShowDetailedInfo } from "../../store/thunks/TVShows/TvShowsThunks.ts";
import { chosenFetchShowLoading } from "../../store/slices/TVShowsSlice.ts";
import DOMPurify from 'dompurify';

const DemonstrateTvShowDetailedInformation = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const addLoading = useAppSelector(chosenFetchShowLoading);
  const chosenShow = useSelector(
    (state: RootState) => state.TVShows.chosenShow,
  );
  console.log(chosenShow);

  useEffect(() => {
    if (id) {
      dispatch(fetchTVShowDetailedInfo(id));
    }
  }, [id, dispatch]);

  const sanitizedSummary = DOMPurify.sanitize(chosenShow.summary);


  return (
      <div>
        <h1> {chosenShow.name}</h1>
        <div dangerouslySetInnerHTML={{__html: sanitizedSummary}}/>
        {chosenShow.image ? (
            <img src={chosenShow.image.medium} alt={chosenShow.name}/>
        ) : (
            <p>No image available</p>
        )}
        <ul>
          <li>Language: {chosenShow.language} </li>
          <li>Premiered: {chosenShow.premiered}</li>
          <li>Genres:</li>
          {chosenShow.genres?.map((genre, index) => (
              <li className="list-group-numbered" key={index}>{genre}</li>
          ))}
        </ul>
      </div>
  );
};

export default DemonstrateTvShowDetailedInformation;
