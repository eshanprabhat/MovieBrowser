import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const posterUrl = `${movie.Poster}`;
    const detailUrl = `/movies/${movie.imdbID}`;

    return (
        <div className='col-lg-3 col-md-3 col-sm-6 col-12 my-4'>
            <div className="card">
                <img src={posterUrl} className="card-img-top img-fluid" alt={movie.Title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    );
};
export default MovieCard;