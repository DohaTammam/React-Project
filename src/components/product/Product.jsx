import React, { useState, useEffect } from "react";
import './Product.scss'
import '../../App.css'

const Product = ({ match }) => {

    let [prod, setProduct] = useState(null);  //useEffect Hooks
    useEffect(() => { getProductsData() }, []); //useState Hooks

    const getProductsData =async () => {

        const aw = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const aw2 = await aw.json();
        setProduct(aw2);
    }
    console.log("product", prod);
    return (
        <div>
            {
                prod ?
                    (
                        <div className="d-flex flex-wrap align-items-center container mt-5 text-align-center container">
                            <div className="d-flex justify-content-center mb-3 mx-4 w-25">
                                <img className="w-100" src={prod.image} alt="" />
                            </div>
                            <div>
                                <h4 className="text-center text-danger fw-bold fs-2">{prod.category}</h4>
                                <h5>{prod.title}</h5>
                            </div>
                            <p>Description: {prod.description}</p>
                            <div>
                                <p className="fw-bold fs-4">Price: {prod.price}</p>
                                <p className="fw-bold fs-4">Rate: {prod.rating.rate}</p>
                            </div>
                        </div>
                    ) : (
                        <div class="spinner-border text-primary " role="status">
                            <span class="visually-hidden" className="spinner"></span>
                        </div>
                    )
            }
        </div>
    );
}

export { Product };