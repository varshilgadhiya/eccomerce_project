import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registrationform from './component/Registrationform';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginform from './component/Loginform'
import Navigationbar from './component/Navigationbar';
import Logout from './component/Logout';
import Profile from './component/user/Profile';
import AlluserTable from './component/admin/AlluserTable';
import Addproduct from "./component/product/Addproduct"
import Producttable from './component/product/Productable';
import Upadateproduct from "./component/product/Upadateproduct"
import Shopping from './component/user/Shopping';
import Cart from './component/user/Cart';
import Editprofile from './component/user/Editprofile';
import AllorderTable from './component/admin/Allorder';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Loginform />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/all-user" element={<AlluserTable />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/editprofile" element={<Editprofile />} />
          <Route exact path="/all-product" element={<Producttable />} />
          <Route exact path="/all-orders" element={<AllorderTable />} />
          <Route exact path="/add-product" element={<Addproduct />} />
          {/* <Route exact path="/overview" element={<Overview />} /> */}
          <Route exact path="/shopping" element={<Shopping />} />
          <Route exact path="/upadate-product/:id" element={<Upadateproduct />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/registration" element={<Registrationform />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
