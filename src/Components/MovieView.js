import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const MovieView = () => {
    const { id } = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        console.log('make an api request', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=9e5e7271e4c3358295bdfdf15427362a`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsloading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />
        }
        if (movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
            const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropPath} />
                    <div className='container my-5'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={posterPath} alt={movieDetails.original_title} className='img-fluid shadow rounded' />
                            </div>
                            <div className='col-md-9'>
                                <p>
                                    {movieDetails.overview}
                                </p>
                                <strong>Budget : Rs.{movieDetails.budget}</strong>
                                <div>Homepage</div>
                            </div>
                        </div>
                    </div>
                </>)
        }
    }
    return renderMovieDetails()
}
export default MovieView;