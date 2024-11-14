import TVShowsSearch from "./components/TVShowsSearch/TVShowsSearch.tsx";
import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>
        <Layout>
            <div>
                <TVShowsSearch/>
            </div>
            <Routes>
                <Route/>


            </Routes>
        </Layout>

    </>
  );
};

export default App;
