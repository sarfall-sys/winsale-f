import { useState } from "react";
import aiApi from "../api/aiApi";
const useAi = () => {
    const [forecast, setForecast] = useState(null);
    const [anomalies, setAnomalies] = useState(null);
    const [insights, setInsights] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchAiForecast() {

        setLoading(true);
        setError(null);
        try {
            const response = await aiApi.getForecast();
            setForecast(response.forecast.map(item => ({ name: item.day, value: item.predicted_qty })));
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }

    }
    async function fetchAiInsights() {

        setLoading(true);
        setError(null);
        try {
            const response = await aiApi.getInsights();
            setInsights(response.insights);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }

    async function fetchAiAnomalies() {
        setLoading(true);
        setError(null);
        try {
            const response = await aiApi.getAnomalies();
            setAnomalies(response.anomalies);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }

    return {
        forecast,
        anomalies,
        insights,
        loading,
        error,
        fetchAiForecast,
        fetchAiInsights,
        fetchAiAnomalies
    }
}

export default useAi;
