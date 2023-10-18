const AddProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.elements.name.value;
        const brandName = form.elements.brandName.value;
        const type = form.elements.type.value;
        const img = form.elements.img.value;
        const price = form.elements.price.value;
        const shortDescription = form.elements.shortDescription.value;
        const rating = form.elements.rating.value;


    
    };

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <input type="text" name="type" placeholder="Product Type" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="img" placeholder="Image" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input type="text" name="shortDescription" placeholder="Short description" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name="rating" min="0" max="5" placeholder="Rating" className="input input-bordered appearance-none" required />
                </div>
                <div className="flex justify-center my-5">
                    <button type="submit" className="btn btn-outline btn-secondary w-4/5 mx-auto">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;