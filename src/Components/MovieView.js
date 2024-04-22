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
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=b09cfc46`)
            .then(response => response.json())
            .then(data => {
                // console.log("Data", data)
                setMovieDetails(data)
                setIsloading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />
        }
        if (movieDetails) {
            const posterPath = `${movieDetails.Poster}`
            const backdropPath = `${movieDetails.Poster}`
            return (
                <>
                    <Hero text={movieDetails.Title} backdrop={backdropPath} />
                    <div className='container my-5'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={posterPath} alt={movieDetails.Title} className='img-fluid shadow rounded' />
                            </div>
                            <div className='col-md-9'>
                                <p>
                                    {movieDetails.Plot}
                                </p>
                                <strong>Genre : {movieDetails.Genre}</strong>
                                <div><b>Director :</b> {movieDetails.Director}</div>
                                <div><b>Writers :</b> {movieDetails.Writer}</div>
                                <div><b>Actors :</b> {movieDetails.Actors}</div>
                                <div><b>Released :</b> {movieDetails.Released}</div>
                                <div><b>Runtime :</b> {movieDetails.Runtime}utes</div>
                                <div><b>Language :</b> {movieDetails.Language}</div>
                                <div><b>Awards</b>: {movieDetails.Awards}</div>
                                <div><b>IMDB Rating</b>: {movieDetails.imdbRating}</div>
                                <div><b>Meta Score</b>: {movieDetails.Metascore}</div>
                                <div><b>Revenue</b>: {movieDetails.BoxOffice}</div>
                                <div><b>Type</b>: {movieDetails.Type}</div>
                                <div><b>Website</b>: {movieDetails.Website}</div>
                            </div>
                        </div>
                    </div>
                </>)
        }
    }
    return renderMovieDetails()
}
export default MovieView;