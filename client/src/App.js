import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registrationform from './component/Registrationform';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Loginform from './component/Loginform'

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route exact path = "/" element={<Loginform/>}/>
     <Route exact path="/registration" element={<Registrationform/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
