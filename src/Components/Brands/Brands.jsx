import { Link } from "react-router-dom";

const Brands = ({ brands }) => {
    const handleBrandClick = (brandName) => {
        console.log(`You clicked on ${brandName}`);
        // You can replace the alert with any action you want to perform when a brand name is clicked.
    };
    return (
        <div className='grid grid-cols-3 my-16 gap-4'>
            {brands.map(brand => (
                <Link key={brand.brandName} to={`/brands/${brand.brandName}`}>
                    <div onClick={() => handleBrandClick(brand.brandName)} key={brand.brandName} className='text-center cursor-pointer flex flex-col items-center'>
                        <img className='w-36 h-24' src={brand.image} alt={brand.brandName} />
                        <h1 className='mt-2'>{brand.brandName}</h1>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Brands;
