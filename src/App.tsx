import TVShowsSearch from "./components/TVShowsSearch/TVShowsSearch.tsx";
import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import DemonstrateTvShowDetailedInformation
    from "./components/DemonstrateTVShowDetailedInformation/DemonstrateTVShowDetailedInformation.tsx";

const App = () => {
  return (
    <>
        <Layout>
                <TVShowsSearch/>
            <Routes>
                <Route path="/shows/:id" element={<DemonstrateTvShowDetailedInformation/>}/>
            </Routes>
        </Layout>

    </>
  );
};

export default App;
