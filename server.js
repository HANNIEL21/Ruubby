import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoutes.js';
import OrderRoute from './Routes/OrderRouter.js';
import MerchantRoute from './Routes/MerchantRouter.js';
import LandlordRoute from './Routes/LandlordRoute.js';
import InfluencerRoute from './Routes/InfluencerRoute.js';
import PropertiesRoute from './Routes/PropertiesRoute.js';

// Config
const app = express();
dotenv.config();

// Environment Variables
const uri = process.env.DB_URI;
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not provided
const url = process.env.ROOT_URL || '/'; // Default to '/' if ROOT_URL is not provided

// Connect to DB
mongoose.connect(uri)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.error("DB connection error:", err));

// Routes
app.get(url, (req, res) => {
  res.send("Welcome to Ruubby Admin Dashboard");
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://ruubby.com",
  optionsSuccessStatus: 200,
}));

app.use(url + 'auth', AuthRoute);
app.use(url + 'user', UserRoute);
app.use(url + 'order', OrderRoute);
app.use(url + 'merchant', MerchantRoute);
app.use(url + 'landlord', LandlordRoute);
app.use(url + 'properties', PropertiesRoute);
app.use(url + 'influencer', InfluencerRoute);
app.use(url + 'order', OrderRoute);

// Start the server
app.listen(port, () => {
  console.log(`Ruubby Server is running on port ${port}`);
});
