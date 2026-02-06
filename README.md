# React + Vite

This is the frontend application of the Sales Insights Platform.
It provides a dashboard for interacting with the AI service through the Laravel backend.
---
##  🚀 Features
- Basic dashboard layout (WIP)
- Data visualization charts and tables
- API integration layer using Axios
- Environment-aware API configuration
- Requests to:
  - `/api/ai/forecast`
  - `/api/ai/insights`
  - `/api/ai/anomalies`
----
##  🛠️ Technologies
-React.js
-Recharts
-Axios
-Tailwind / CSS modules
---
### 1️⃣ Install dependencies
```bash
npm install
````
2️⃣ Environment variables

Create .env:
```bash
VITE_API_URL=http://localhost:8000/
````
3️⃣ Run the development server
````bash
npm run dev
````
---
#🛠️ Planned Features (Coming Soon)
These will be implemented as the UI grows:
- Buttons for triggering AI actions:
  - **Generate Forecast**
  - **Generate Insights**
  - **Detect Anomalies**
### 🧠 **AI Data Storage**

- Save “Historical Insights” in the database (Laravel)
- Save “Anomaly Predictions” for long-term analysis
- Save “Forecast Results” for reporting

### 📊 **History Screens**
- Insights history page
- Anomaly logs page
- Forecast trends history

### ⏳ **Automation **
- Daily scheduled insights generation (Laravel scheduler)
- Weekly or monthly reports
- Notifications when anomalies are detected
