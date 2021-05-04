import MyCarousel from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.css";
import Featured from "./components/FeaturedDishes"
import InstantOrder from "./components/InstantOrder"
import Footer from "./components/Footer"


function Home() {

    return (
        <>
            <MyCarousel />
            <Featured />
            <InstantOrder />
            <Footer />
        </>
    );

}

export default Home;
