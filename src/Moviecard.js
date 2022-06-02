function Card (props){
    return(
        <div className="movie-list">
            <div className="movie-container">
                <img src={props.image} className="movie-poster"></img>
                <div className="movie-specs">
                    <h3 className="movie-title">{props.title}</h3>
                    <p className="movie-rating">{props.rating}</p>
                    <p className="movie-genere">{props.genere}</p>
                    <p className="movie-synopsis">{props.synopsis}</p>
                </div>


            </div>

        </div>
    );
}

export default Card;