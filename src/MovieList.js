import {useState} from 'react';
import {MovieCard} from './MovieCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function MovieList({movieDetails}){

    return(
        <div>
<div className="App">
{movieDetails.map((element,index)=> <MovieCard movies={element} id={index} />)}
</div>
        </div>


     
    )
}
