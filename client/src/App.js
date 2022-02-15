import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registrationform from './component/Registrationform';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginform from './component/Loginform'
import Navigationbar from './component/user/Navigationbar';
import Profile from './component/user/Profile';
import Logout from './component/Logout';

function App() {
  return (
    <>
      {
        localStorage.getItem("user") ?
          <BrowserRouter>
          <Navigationbar />
            <Routes>
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/logout" element={<Logout/>} />
            </Routes>
          </BrowserRouter>
          :
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Loginform />} />
              <Route exact path="/registration" element={<Registrationform />} />
            </Routes>
          </BrowserRouter>
      }
    </>
  );
}

export default App;
