interface IShows {
  name: string;
  id: number;
  // description: string;
  // image: string;
  // genres: string[];
  // languages: string;
  // premiered: string;
}

interface IShowsForm {
  name: string;
  id: number;
  // description: string;
  // image: string;
  // genres: string[];
  // languages: string;
  // premiered: string;
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