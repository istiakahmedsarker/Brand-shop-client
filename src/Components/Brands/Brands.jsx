const Brands = ({ brands }) => {
    return (
        <div className='grid grid-cols-3 my-16 gap-4'>
            {brands.map(brand => (
                <div key={brand.brandName} className='text-center flex flex-col items-center'>
                    <img className='w-36 h-24' src={brand.image} alt={brand.brandName} />
                    <h1 className='mt-2'>{brand.brandName}</h1>
                </div>
            ))}
        </div>
    );
};

export default Brands;
