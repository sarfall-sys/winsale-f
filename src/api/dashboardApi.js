import api from "../api/api"
const dashboardApi  ={

    async  getDashboardStats() {
    const  response = await api.get("/api/dashboard/stats");
      return response;
    },

    async  getDashboardChart() {
      const response = await api.get("/api/dashboard/charts");
      return response;
    }
}

export default dashboardApi;

