import './App.css';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  DashboardHome,
  Home,
  Landlords,
  Merchants,
  Orders,
  Products,
  Properties,
  Transactions,
  Users,
  Shop,
  ShopHome,
  Login,
  Signup,
  Profile,
  Saved,
  Order,
} from './Export';

function App() {
  const { token, userDetails } = useSelector((state) => state.user)
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shop' element={<Shop />}>
          <Route index element={<ShopHome />} />
        </Route>
        {token && (
          <>
            {userDetails.userType === "admin" || userDetails.userType === "merchant" || userDetails.userType === "landlord" ? (
              <Route path='/dashboard' element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path='users' element={<Users />} />
                <Route path='users' element={<Users />} />
                <Route path='orders' element={<Orders />} />
                <Route path='orders/:id' element={<Orders />} />
                <Route path='properties' element={<Properties />} />
                <Route path='properties/:id' element={<Properties />} />
                <Route path='Products' element={<Products />} />
                <Route path='Products/:id' element={<Products />} />
                <Route path='transactions' element={<Transactions />} />
                <Route path='transactions/:id' element={<Transactions />} />
                <Route path='merchants' element={<Merchants />} />
                <Route path='merchants/:id' element={<Merchants />} />
                <Route path='landlords' element={<Landlords />} />
                <Route path='landlords/:id' element={<Landlords />} />
              </Route>
            ) : (
              <>
                <Route path='myprofile' element={<Profile />} />
                <Route path='orders' element={<Order />} />
                <Route path='saveditems' element={<Saved />} />
                {" "}
              </>
            )}
          </>
        )

        }
      </Routes>
    </Router>
  );
}

export default App;
