interface IShows {
  name: string;
  id: number;
}
interface IShowsDetails {
  name: string;
  id: number;
  summary: string;
  image?: {
   medium: string
  };
  genres: string[];
  languages: string;
  premiered: string;
}

interface IShowsForm {
  name: string;
  id: number;

}

interface IShowsAPI {
  [id: string]: IShows;
}

interface ApiShow {
  show: {
    id: number;
    name: string;
  };
}