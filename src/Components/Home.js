import AboutView from './AboutView';
import Hero from './Hero';
const Home = () => {
    return (
        <>
            <Hero text="Welcome to Home Page!" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            <h1>
                                Welcome to MovieSearch!
                            </h1>

                            Find Your Favorite Movies Instantly

                            Welcome to MovieSearch, your go-to destination for discovering information about all your favorite movies. Whether you're a film buff, casual viewer, or simply looking for your next movie night selection, MovieSearch has you covered.

                            <b>Effortless Search</b>

                            With our intuitive search feature, finding the perfect movie is easier than ever. Simply start typing the title of the movie you're interested in, and our powerful search engine will instantly provide you with relevant suggestions. No more endless scrolling or complicated navigation – just quick and efficient access to the movies you love.

                            Comprehensive Movie Details

                            Once you've found the movie you're looking for, MovieSearch provides you with a wealth of information to satisfy your curiosity. From essential details like release date, genre, and runtime, to in-depth insights such as cast members, plot synopsis, and user ratings, you'll have everything you need to make informed viewing decisions.

                            <b>Seamless User Experience</b>

                            Designed with user experience in mind, MovieSearch offers a sleek and intuitive interface that adapts seamlessly to any device. Whether you're browsing on your desktop, tablet, or smartphone, you can enjoy the same seamless experience and access our vast database of movies anytime, anywhere.

                            Ready to dive into the world of movies? Start your search now and discover a treasure trove of cinematic wonders with MovieSearch. Whether you're exploring timeless classics, trending blockbusters, or hidden gems, MovieSearch is your ultimate companion for all things movies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;