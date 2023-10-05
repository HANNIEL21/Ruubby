import './App.css';
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, DashboardHome, Home, Landlords, Merchants, Orders, Products, Properties, Transactions, Users, Shop, ShopHome } from './Export';
import { store } from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />}>
            <Route index element={<ShopHome />} />
          </Route>
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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
