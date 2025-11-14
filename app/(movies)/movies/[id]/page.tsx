import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail(
    { params: { id } }: { params: { id: string } }
) {
    return (<div>
        <h3>Movie Detail Page</h3>
        <Suspense fallback={<h2>Loading movie info...</h2>}>
            <MovieInfo id={id} />
        </Suspense>
        <h4>Videos</h4>
        <Suspense fallback={<h2>Loading movie videos...</h2>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
    );
}