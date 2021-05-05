import MyCarousel from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.css";
import FeaturedDishes from "./components/FeaturedDishes"
import InstantOrder from "./components/InstantOrder"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials";




function Home() {

    return (
        <div className="home">
            <MyCarousel />
            <FeaturedDishes />
            <InstantOrder />
            <Testimonials />
            <Footer />
        </div>
    );

}

export default Home;
