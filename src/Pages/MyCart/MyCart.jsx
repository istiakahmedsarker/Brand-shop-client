import React, { useEffect, useState } from 'react';
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cardIdData, setCardIdData] = useState([]);
    const [details, setDetails] = useState([]);
    const { user } = useAuth();
    const userEmail = user?.email;

    useEffect(() => {
        fetch(`https://foodify-server-side-ak50jpw7o-1234-fs-projects.vercel.app/myCart/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setCardIdData(data));
    }, [userEmail]);

    useEffect(() => {
        const ids = cardIdData.map(cart => cart.myCartId);
        if (ids.length > 0) {
            fetch('https://foodify-server-side-ak50jpw7o-1234-fs-projects.vercel.app/myCartDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ids }),
            })
                .then((res) => res.json())
                .then((data) => setDetails(data));
        }
    }, [cardIdData]);

    const handleDelete = (_id) => {
        fetch(`https://foodify-server-side-ak50jpw7o-1234-fs-projects.vercel.app/myCart/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDetails(prevDetails => prevDetails.filter(product => product._id !== _id));
                Swal.fire(
                    'Good job!',
                    'Deleted from cart successfully!',
                    'success'
                );
            });
    };


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4">
            {details.map((product) => (
                <div key={product._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-72 lg:w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden h-40 rounded-t-xl">
                        <img src={product.img} className="object-cover w-full h-full" alt={product.name} />
                    </div>
                    <div className="p-6 flex flex-col h-40">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {product.name}
                            </p>
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                ${product.price}
                            </p>
                        </div>
                        <p
                            className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 overflow-hidden overflow-ellipsis"
                            title={product.shortDescription}
                        >
                            {product.shortDescription}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button onClick={() => handleDelete(product._id)}
                            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyCart;
