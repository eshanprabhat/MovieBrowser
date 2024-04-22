
import Hero from './Hero';
const Home = () => {
    return (
        <>
            <Hero text="Welcome to MovieBrowser!" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            <h1>
                                Movie-Details at your fingertips.
                            </h1>
                            <div>
                                <b><u>
                                    Find Your Favorite Movies Instantly
                                </u></b>
                            </div>
                            <div>
                                Welcome to MovieSearch, your go-to destination for discovering information about all your favorite movies. Whether you're a film buff, casual viewer, or simply looking for your next movie night selection, MovieSearch has you covered.
                            </div>
                            <div>

                                <b><u>Effortless Search</u></b>
                            </div>
                            <div>

                                With our intuitive search feature, finding the perfect movie is easier than ever. Simply start typing the title of the movie you're interested in, and our powerful search engine will instantly provide you with relevant suggestions. No more endless scrolling or complicated navigation – just quick and efficient access to the movies you love.
                            </div>
                            <div><b><u>

                                Comprehensive Movie Details
                            </u></b>
                            </div>
                            <div>
                                Once you've found the movie you're looking for, MovieSearch provides you with a wealth of information to satisfy your curiosity. From essential details like release date, genre, and runtime, to in-depth insights such as cast members, plot synopsis, and user ratings, you'll have everything you need to make informed viewing decisions.
                            </div>
                            <div>
                                <b><u>Seamless User Experience</u></b>
                            </div>
                            <div>
                                Designed with user experience in mind, MovieSearch offers a sleek and intuitive interface that adapts seamlessly to any device. Whether you're browsing on your desktop, tablet, or smartphone, you can enjoy the same seamless experience and access our vast database of movies anytime, anywhere.
                            </div>
                            <div>
                                Ready to dive into the world of movies? Start your search now and discover a treasure trove of cinematic wonders with MovieSearch. Whether you're exploring timeless classics, trending blockbusters, or hidden gems, MovieSearch is your ultimate companion for all things movies.
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;