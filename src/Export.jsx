// Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";

import Shop from "./pages/market/Shop";
import ShopHome from "./pages/market/ShopHome";
import Profile from "./pages/market/Profile";
import Product from "./pages/market/Product";
import Order from "./pages/market/Order";
import Saved from "./pages/market/Saved";

import Automobiles from "./pages/market/categories/Automobiles";
import Fashion from "./pages/market/categories/Fashion";
import KitchenAppliance from "./pages/market/categories/KitchenAppliance";
import Laptop from "./pages/market/categories/Laptop";
import Phone from "./pages/market/categories/Phone";

import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Users from "./pages/dashboard/Users";
import Merchants from "./pages/dashboard/Merchants";
import Landlords from "./pages/dashboard/Landlords";
import Properties from "./pages/dashboard/Properties";
import Products from "./pages/dashboard/Products";
import Orders from "./pages/dashboard/Orders";
import Transactions from "./pages/dashboard/Transactions";


// Components
import Categories from "./components/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Slide from "./components/Slide";
import Slider from "./components/Swiper";
import ItemGrid from "./components/ItemGrid";
import ExploreGrid from "./components/ExploreGrid";
import ExploreCard from "./components/ExploreCard";
import Sidebar from "./components/Sidebar";
import Spinner from "./components/Spinner";
import Buttons from "./components/Buttons";
import DashboardHeader from "./components/DashboardHeader";
import DashboardTable from "./components/DashboardTable";

// Utils
import Currency  from './utils/currency';

// Redux
import { authSlice } from "./Redux/Features/Auth/AuthSlice";
import { userSlice } from "./Redux/Features/User/UserSlice";
import { Logout } from "./Redux/Features/User/UserSlice";


// Components Export
export {
    Header, Footer, FloatingButton, Slide, ExploreGrid,
    ExploreCard, Sidebar, Buttons, DashboardHeader,
    DashboardTable, Slider, Spinner, Categories,
    ItemGrid,
};

// Utils Export
export {
    Currency,
}

// Screens Export
export { Login, Signup };
export { SharedLayout, Home };
export { DashboardLayout, Dashboard, DashboardHome, Users, Merchants, Landlords, Products, Properties, Orders, Transactions };
export { Shop, ShopHome, Profile, Product, Order, Saved };
export { Automobiles, Fashion, KitchenAppliance, Laptop, Phone };

// Redux Export
export { authSlice, userSlice, Logout };