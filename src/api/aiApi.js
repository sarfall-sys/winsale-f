import api from "./api";
const  aiApi =  {

      async getForecast() {
        return await api.post('/api/ai/forecast');
    },

    async getInsights() {
        return await api.post('/api/ai/insights');
    },

    async getAnomalies() {
        return await api.post('/api/ai/anomalies');
    }

}

export default aiApi;