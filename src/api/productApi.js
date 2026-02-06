import api from './api.js';
const productApi =   {

    async getProducts(params = {}) {
       const response = await api.get('/api/products', { params });
       return response.data;
   } ,
    async createProduct(productData) {
       const response = await api.post('/api/products', productData);
       return response.data;
   }
    ,
    async updateProduct(id, productData) {
       const response = await api.patch(`/api/products/${id}`, productData);
       return response.data;
   },
    async deleteProduct(id) {
       const response = await api.delete(`/api/products/${id}`);
       return response.data;
   },
    async getProduct(id) {
       const response = await api.get(`/api/products/${id}`);
       return response.data;
   },
}

export default productApi;