import { useState } from "react";

import productApi from "../api/productApi.js";
const useProduct = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchProducts() {
        setLoading(true);
        setError(null); 
        try {
            const response = await productApi.getProducts();
            setProducts(response.data);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }

    async function createProduct(data) {
        setLoading(true);
        setError(null);
        try {
            const response = await productApi.createProduct(data);
            setProducts((prevProducts) => [...prevProducts, response]);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }

    return {
        products,
        loading,
        error,
        fetchProducts,
        createProduct
    }

}

export default useProduct;