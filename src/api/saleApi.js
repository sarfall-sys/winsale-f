import api from './api.js';
const  saleApi =  {
    async getSales(params = {}) {
       const response = await api.get('/api/sales', { params });
       return response.data;
    },

    async createSale(data) {
        const response = await api.post('/sales', data);
        return response.data;
    },
    async updateSale(id, data) {
        const response = await api.patch(`/sales/${id}`, data);
        return response.data;
    },
    async deleteSale(id) {
        const response = await api.delete(`/sales/${id}`);
        return response.data;
    },
    async getSale(id) {
        const response = await api.get(`/sales/${id}`);
        return response.data;
    },
}

export default saleApi;