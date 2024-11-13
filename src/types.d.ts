interface IShows {
    name: string;
    description: string;
    id: number;
    image: string;
    genres: string[];
    languages: string;
    premiered: string;
}

interface IShowsAPI {
    [id: string]: IShows;
}