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
import Producttable from './component/product/Productable';

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
          <Route exact path="/all-product" element={<Producttable/>} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/registration" element={<Registrationform />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
