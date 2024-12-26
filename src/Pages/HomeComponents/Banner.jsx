import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "/b1.jpg"
import banner2 from "/b2.jpg"
import banner3 from "/b3.jpg"


const Banner = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: true
    };


    return (
        <div>
            <Slider {...settings}>
                <div className="relative">
                    <img src={banner1} alt="" className="w-full brightness-50 h-[500px] object-cover" />
                    <div className="space-y-10 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-5xl text-white font-bold">Your Voice, Their Improvement</h2>
                        <p className="text-xl text-gray-300">Rate, review, and recommend the services you use every day. Help others make better decisions while businesses grow from your feedback.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={banner2} alt="" className="w-full brightness-50 h-[500px] object-cover" />
                    <div className="space-y-10 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-5xl text-white font-bold">Honest Reviews. Better Choices.</h2>
                        <p className="text-xl text-gray-300">Your reviews make a difference. Share your thoughts and find the best services based on what truly matters to you.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={banner3} alt="" className="w-full brightness-50 h-[500px] object-cover" />
                    <div className="space-y-10 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-5xl text-white font-bold">Find the Best Services, Rated by Real Users</h2>
                        <p className="text-xl text-gray-300">Explore authentic reviews from a trusted community. Share your experience and discover reliable services effortlessly.</p>
                    </div>
                </div>
                
            </Slider>
        </div>
    );
}

export default Banner;