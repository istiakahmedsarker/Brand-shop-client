import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/productDetails/${id}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [id]);

    const renderDetails = () => {

        return details.map((detail) => (
            <div key={detail._id}>
                <h1>{detail.name}</h1>
                <img src={detail.img} alt={detail.name} />
                <p>{detail.shortDescription}</p>
                
                <p className="text-xl font-bold mb-4">${detail.price}</p>
                <button onClick={()=> console.log('added to cart')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add to Cart</button>
            </div>
        ));
    };

    return (
        <div>
            {renderDetails()}
        </div>
    );
};

export default ProductDetails;
