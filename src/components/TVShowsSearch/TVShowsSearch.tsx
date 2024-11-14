import { useState } from "react";
import { AutoComplete, AutoCompleteChangeEvent } from "primereact/autocomplete";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import { fetchSuggestions } from "../../store/thunks/TVShows/TvShowsThunks.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { selectFetchShowLoading } from "../../store/slices/TVShowsSlice.ts";
import { Link } from "react-router-dom";

const TvShowsSearch = () => {
  const addLoading = useAppSelector(selectFetchShowLoading);
  const [show, setShow] = useState<IShowsForm>({
    id: 0,
    name: "",
  });

  const dispatch = useAppDispatch();

  const fetchedSuggestions = useSelector(
    (state: RootState) => state.TVShows.shows,
  );

  const onChangeShowInput = (event: AutoCompleteChangeEvent) => {
    const { value } = event;

    if (value.length > 2) {
      setShow((prevState) => ({
        ...prevState,
        name: value,
      }));
      dispatch(fetchSuggestions(value));
    } else {
      setShow((prevState) => ({
        ...prevState,
        name: value,
      }));
    }
  };

  return (
    <div className="container">
      <form className="my-3 mx-auto w-50 d-flex justify-content-center align-items-center">
        <div>
          <label htmlFor="autocomplete" className="m-2">
            Search for TV Show:
          </label>
          <AutoComplete
            value={show.name}
            suggestions={fetchedSuggestions || []}
            completeMethod={onChangeShowInput}
            virtualScrollerOptions={{ itemSize: 38 }}
            field="name"
            dropdown
            onChange={onChangeShowInput}
            itemTemplate={(oneShow: IShows) => (
              <Link to={`/shows/${oneShow.id}`}>
                <div>{oneShow.name}</div>
              </Link>
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default TvShowsSearch;
