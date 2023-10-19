
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Brands brands={loaderData}></Brands>
        </div>
    );
};

export default Home;