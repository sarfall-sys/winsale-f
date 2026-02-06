import axios from 'axios';

class api {

    constructor() {
        this.client = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",

            },
            timeout: 6000,
            withCredentials: false, // IMPORTANT for Sanctum cookies

        });

        this.setUpInterceptors();

    }


    setUpInterceptors() {
        //Request interceptor for adding sanctum
        this.client.interceptors.request.use(
            async (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        //Response interceptor for handling responses globally
        this.client.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    //Api methods
    async get(endpoint, params = {}) {
        const response = await this.client.get(endpoint, { params });
        return response.data;
    }

    async post(endpoint, data = {}) {
        const response = await this.client.post(endpoint, data);
        return response.data;
    }

    async put(endpoint, data = {}) {
        const response = await this.client.put(endpoint, data);
        return response.data;
    }

    async delete(endpoint) {
        const response = await this.client.delete(endpoint);
        return response.data;
    }

}

export default new api();