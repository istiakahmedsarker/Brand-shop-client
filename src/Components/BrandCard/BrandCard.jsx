import { Link } from 'react-router-dom';

const BrandCard = ({ cardData }) => {
    const { _id, price, name, img, shortDescription } = cardData;

    return (
        <div className="">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-72 lg:w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden h-40 rounded-t-xl">
                    <img src={img} className="object-cover w-full h-full" alt={name} />
                </div>
                <div className="p-6 flex flex-col h-40">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {name}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <p
                        className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 overflow-hidden overflow-ellipsis"
                        title={shortDescription}
                    >
                        {shortDescription}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        <Link to={`/updateProduct/${_id}`}>Update</Link>


                    </button>
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        <Link to={`/productDetails/${_id}`}>Update</Link>


                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default BrandCard;
