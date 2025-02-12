import Banner from "./HomeComponents/Banner";
import Count from "./HomeComponents/Count";
import Partners from "./HomeComponents/Partners";
import RecentServices from "./HomeComponents/RecentServices";
import Services from "./HomeComponents/Services";

const Home = () => {

    document.title = "RateWise | Home"

    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <RecentServices></RecentServices>
            <Count></Count>
            <Partners></Partners>
        </>
    );
};

export default Home;