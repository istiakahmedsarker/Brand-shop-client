
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../Components/Reviews/Reviews';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

const Home = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Brands brands={loaderData}></Brands>
            <Reviews></Reviews>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;