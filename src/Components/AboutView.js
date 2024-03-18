import Hero from './Hero';

const AboutView = () => {
    return (
        <>
            <Hero text="About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Wikipedia's purpose is to benefit readers by presenting information on all branches of knowledge. Hosted by the Wikimedia Foundation, it consists of freely editable content, whose articles also have numerous links to guide readers to more information.
                            Written collaboratively by largely anonymous volunteers known as Wikipedians, Wikipedia articles can be edited by anyone with Internet access (and who is not presently blocked), except in limited cases where editing is restricted to prevent disruption or vandalism. Since its creation on January 15, 2001, it has grown into the world's largest reference website, attracting over a billion visitors monthly. Wikipedia currently has more than sixty-two million articles in more than 300 languages, including 6,791,890 articles in English, with 125,139 active contributors in the past month.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutView;