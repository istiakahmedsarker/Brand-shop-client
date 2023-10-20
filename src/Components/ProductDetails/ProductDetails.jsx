import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const id = useParams()
    console.log('kire')
    return (
        <div>
            <h1>Yoyo bodda</h1>
        </div>
    );
};

export default ProductDetails;