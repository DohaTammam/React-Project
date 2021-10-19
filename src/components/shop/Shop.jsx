import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Shop.scss'

const Shop = ()=>{

    let [Products, setProducts] = useState([]);
    useEffect(() => {fetchProducts()}, [])


    const fetchProducts = async() => {
        const aw = await fetch('https://fakestoreapi.com/products');
        const aw2 = await aw.json();
        setProducts(aw2);
    };

    return(
        <div className="text-align-center">
            <h2 className="my-3 text-danger title">Products</h2>
            <section className="d-flex flex-wrap justify-content-center mt-3">
                {
                    Products &&
                    Products.map(product => { 
                        return(
                            <div key={product.id} className="product w-25 border me-3 mb-3 text-start p-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <img className ="w-50" src={product.image} alt=""/>
                                </div>
                                <h4 className="text-center text-danger fw-bold fs-3">{product.category}</h4>
                                <h5 className="fw-normal">{product.title}</h5>
                                <p className="fw-bold fs-6">Price: {product.price}</p>
                                <p className="fw-bold fs-6">Rate: {product.rating.rate}</p>
                                <Link to={`/shop/${product.id}`}>
                                    <button type="button" className = "btn btn-primary">View Datails</button>
                                </Link>
                            </div>
                        );
                     })
                }
            </section>
        </div>
    );
}

export {Shop};