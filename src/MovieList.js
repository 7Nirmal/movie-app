
import {MovieCard} from './MovieCard';

export function MovieList({movieDetails}){

    return(
        <div className="movie">
{movieDetails.map((element,index)=> <MovieCard movies={element} id={index} />)}
        </div>


     
    )
}
