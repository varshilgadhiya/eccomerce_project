import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registrationform from './component/Registrationform';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginform from './component/Loginform'
import Navigationbar from './component/user/Navigationbar';

function App() {
  return (
<<<<<<< Updated upstream
   <BrowserRouter>
   <Routes>
     <Route exact path = "/" element={<Loginform/>}/>
     <Route exact path="/registration" element={<Registrationform/>}/>
     <Route exact path ="/navigationbar" element={<Navigationbar/>}/>
     </Routes>
     </BrowserRouter>
=======
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Loginform />} />
        <Route exact path="/registration" element={<Registrationform />} />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
