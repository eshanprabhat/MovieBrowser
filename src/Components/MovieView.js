import Hero from './Hero';
import { useParams, Link } from 'react-router-dom';
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
            let homePage = "none"
            if (movieDetails.homepage) {
                homePage = `${movieDetails.homepage}`
            }
            else {
                homePage = "No Link Available....."
            }
            let Budget = "none"
            if (movieDetails.homepage) {
                Budget = `Rs.${movieDetails.budget}`
            }
            else {
                Budget = "Not Available"
            }
            let Revenue = "none"
            if (movieDetails.revenue) {
                Revenue = `Rs.${movieDetails.revenue}`
            }
            else {
                Revenue = "Not Available"
            }
            let Tagline = "none"
            if (movieDetails.homepage) {
                Tagline = `${movieDetails.tagline}`
            }
            else {
                Tagline = "No Tagline....."
            }
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
                                <strong>Budget : {Budget}</strong>
                                <div><b>Homepage</b> : <Link to={homePage} target="_blank">{homePage}</Link></div>
                                <div><b>Release Date</b>: {movieDetails.release_date}</div>
                                <div><b>Revenue</b>: {Revenue}</div>
                                <div><b>Runtime</b>: {movieDetails.runtime} minutes</div>
                                <div><b>Rating</b>: {movieDetails.vote_average}</div>
                                <div><b>Status</b>: {movieDetails.status}</div>
                                <p>
                                    <b>Tagline</b>: {Tagline}
                                </p>
                            </div>
                        </div>
                    </div>
                </>)
        }
    }
    return renderMovieDetails()
}
export default MovieView;