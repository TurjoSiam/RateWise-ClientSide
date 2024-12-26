import Banner from "./HomeComponents/Banner";
import Count from "./HomeComponents/Count";
import Partners from "./HomeComponents/Partners";
import Services from "./HomeComponents/Services";

const Home = () => {

    document.title = "RateWise | Home"

    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Count></Count>
            <Partners></Partners>
        </>
    );
};

export default Home;