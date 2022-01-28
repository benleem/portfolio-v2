import Hero from "../components/Hero";
import Introduction from "../components/Introduction"

const Home = () => {
    return (
        <div className="Home">
            <Hero/>
            <div style={{backgroundColor:'#41007A'}}>
                <Introduction/>
            </div>
        </div>
    );
};

export default Home;
