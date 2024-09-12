import axios from 'axios';

// import.meta.env: syntax to access environment variables kalau pakai dotenv
// process.env

const axiosClient = axios.create({
  baseURL: 'https://digistar-demo-be.vercel.app/api', // Example API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
