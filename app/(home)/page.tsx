import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
    title: "Home"
};



async function getMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
}

export default async function Home() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {
                movies.map((movie) => (
                   <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} /> 
                ))
            }
        </div>
    );
}
/*
import { useEffect, useState } from "react";
function ReactClientHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    async function getMovies() {
        const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (<div>
        {isLoading ? "Loading..." : JSON.stringify(movies)}
    </div>
    );
}
*/