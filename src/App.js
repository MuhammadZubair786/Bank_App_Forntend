import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import ForgotPassword from './components/forgotPassword';
import UpdatePassword from './components/UpdatePassword';
import MissingDetails from './components/MissingDetails';

function App(props) {

  return (
 <Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/regsister' element={<SignUp/>}></Route>
  <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
  <Route path='/UpdatePassword' element={<UpdatePassword/>}></Route>
  <Route path='/Missingdetails' element={<MissingDetails/>}></Route>


 
 </Routes>
  );
}



export default App;
