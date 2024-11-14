import {useState} from "react";
import {AutoComplete, AutoCompleteChangeEvent} from "primereact/autocomplete";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {fetchSuggestions} from "../../store/thunks/TVShows/TvShowsThunks.ts";
import {useAppSelector, useAppDispatch} from "../../app/hooks.ts";
import {selectAddShowLoading} from "../../store/slices/TVShowsSlice.ts";


const TvShowsSearch = () => {
    const addLoading = useAppSelector(selectAddShowLoading);
    const [show, setShow] = useState<IShowsForm>({
        id: 0,
        name: '',
    });

    const dispatch = useAppDispatch();

    const fetchedSuggestions = useSelector(
        (state: RootState) => state.TVShows.shows
    );

    const onChangeShowInput = (event: AutoCompleteChangeEvent) => {
        const { value} = event;
        if (value && typeof value === 'string' && value.length > 0) {
            setShow(prevState => ({
                ...prevState,
                name: value,
            }));
            dispatch(fetchSuggestions(value));
        } else {
            setShow(prevState => ({
                ...prevState,
                name: value || '',
            }));
        }
    };

    console.log(show);

  return (
    <div className="container">
      <form className="my-3 mx-auto w-50 d-flex justify-content-center align-items-center">
        <div>
          <label htmlFor="autocomplete" className="m-2"> Search for TV Show: </label>
          <AutoComplete
            value={show.name}
            suggestions={fetchedSuggestions || []}
            completeMethod={onChangeShowInput}
            virtualScrollerOptions={{ itemSize: 38 }}
            field="name"
            dropdown
            onChange={onChangeShowInput}
          />
        </div>
      </form>
    </div>
  );
};

export default TvShowsSearch;
