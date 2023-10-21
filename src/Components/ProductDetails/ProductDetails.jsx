import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const [details, setDetails] = useState([]);
    const { id: myCartId } = useParams();
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/productDetails/${myCartId}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [myCartId]);

    const addToCart = () => {
        const email = user.email
        const addedCarts = { email, myCartId: myCartId }

        fetch("http://localhost:5000/addToCart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addedCarts),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                Swal.fire(
                    'Good job!',
                    'Added to cart successfully!',
                    'success'
                );
            });
    }

    return (
        <div>
            {
                details.map((detail) => (
                    <div key={detail._id}>
                        <div className="">
                            <h1 className='text-5xl text-center font-semibold my-5'>{detail.name}</h1>
                            <div className="flex justify-center">
                                <img src={detail.img} alt={detail.name} />
                            </div>
                            <p className='mx-16 my-4 lg:mx-36'>{detail.shortDescription}</p>
                        </div>

                        <div className="">
                            <p className="text-xl text-center font-bold mb-4">${detail.price}</p>
                            <div className="flex justify-center">

                                <button onClick={addToCart} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductDetails;
