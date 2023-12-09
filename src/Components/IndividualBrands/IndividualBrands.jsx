import { useLoaderData, useParams } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";

const IndividualBrands = () => {
    const data = useLoaderData() || {};
    const brandName = useParams()?.id;
    // console.log(brandName)

    // Use the filter method to find the data object that matches the brandName
    const individualBrandData = data?.filter(item => item?.brandName?.toLowerCase() === brandName?.toLowerCase());
    return (
        <div className="">
            <div className="">
                <div className="carousel h-[80vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/M7wwkCt/Davis-M-Coke-banner-scaled.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/H41BQrr/images.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tcBdR2H/ravi-sanker-coke-land.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 my-10">
                {
                    individualBrandData.slice(0,4).map(cardData => <BrandCard cardData={cardData}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default IndividualBrands;