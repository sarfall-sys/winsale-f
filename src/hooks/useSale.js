import { useState } from "react"
import saleApi from "../api/saleApi"
const useSale = () => {

    const [sales,setSales] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    async function fetchSales() {
        setLoading(true);
        setError(null);
        try {
            const response = await saleApi.getSales();
            setSales(response.data);
        }   
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }   
    }
    
    async function createSale(data) {
        setLoading(true);
        setError(null);
        try {
            const response = await saleApi.createSale(data);
            setSales((prevSales) => [...prevSales, response]);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }
    
    return {
        sales,
        loading,
        error,
        fetchSales,
        createSale
    }

}

export default useSale;