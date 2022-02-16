import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registrationform from './component/Registrationform';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginform from './component/Loginform'
import Navigationbar from './component/user/Navigationbar';
import Logout from './component/Logout';
import Profile from './component/user/Profile';

function App() {
  return (
    <>
      {
        localStorage.getItem("user") ?
          //auth route
          <>
            {
              localStorage.getItem("role") === "admin" ?
                //admin route
                <BrowserRouter>
                  <Navigationbar />
                  <Routes>
                    <Route exact path="/logout" element={<Logout />} />
                    <Route exact path="/profile" element={<Profile />} />

                  </Routes>
                </BrowserRouter>
                :
                //user route
                <BrowserRouter>
                  <Navigationbar />
                  <Routes>
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/logout" element={<Logout />} />
                  </Routes>
                </BrowserRouter>
            }
          </>
          :
          //non-auth route
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
