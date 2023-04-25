import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import ForgotPassword from './components/forgotPassword';
import UpdatePassword from './components/UpdatePassword';
import MissingDetails from './components/MissingDetails';
import Sidebar from './components/Sidebar';
import CustomerDashboard from './components/Customer_Dashboard/cusdashboard';
import CreateAccount from './components/Customer_Dashboard/createAccount';
import AddBeneficiary from './components/Customer_Dashboard/AddBeenficiary';
import RemoveBenficiary from './components/Customer_Dashboard/RemoveBenficiary';
import TransferMoney from './components/Customer_Dashboard/TransferMoney';
import Profile from './components/Customer_Dashboard/Profile';
import View_Statements from './components/Customer_Dashboard/View_Staments';
import Staff_Login from './components/Staff_Dashboard/Staff_Login';
import Staff_Dashboard from './components/Staff_Dashboard/Staff_Dashboard';
import Approve_Benefiers from './components/Staff_Dashboard/Approve_Benefiers';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import GetUserList from './Store/action/GetUser';
import Approve_Account from './components/Staff_Dashboard/Approve_Account';
import Enable_Disable_Account from './components/Staff_Dashboard/Enable_Disable_Account';
import Admin_Dashboard from './components/Admin/Admin_Dashboard';
import View_Staff from './components/Admin/View_Staff';
import Staff_List from './Store/action/StaffList';
function App(props) {

  useEffect(()=>{
    let user = localStorage.getItem("users")
    let staff = localStorage.getItem("staff")
    if(user == null){
      props.GetUserList([])
    }
    else{
      props.GetUserList(JSON.parse(user))
    }

    if(staff==null){
      props.Staff_List([])
    }
    else{
      props.Staff_List(JSON.parse(staff))
    }
  },[])

  return (
    <Sidebar>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/regsister' element={<SignUp />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/UpdatePassword' element={<UpdatePassword />}></Route>
        <Route path='/Missingdetails' element={<MissingDetails />}></Route>
        <Route path='/customerDashboard' element={<CustomerDashboard/>}></Route>
        <Route path='/createAccount' element={<CreateAccount/>}></Route>
        <Route path='/addBeneficiary' element={<AddBeneficiary/>}></Route>
        <Route path='/RemoveBenficiary' element={<RemoveBenficiary/>}></Route>
        <Route path='/TransferMoney' element={<TransferMoney/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/ViewStatements' element={<View_Statements/>}></Route>
        <Route path='/login' element={<Staff_Login/>}></Route>
        <Route path='/StaffDashborad' element={<Staff_Dashboard/>}></Route>
        <Route path='/Approve_Benefiers' element={<Approve_Benefiers/>}></Route>
        <Route path='/Approve_Account' element={<Approve_Account/>}></Route>
        <Route path='/Admin_Dashboard' element={<Admin_Dashboard/>}></Route>
        <Route path='/View_Staff' element={<View_Staff/>}></Route>
        <Route path='*' element={<h1>404 page not Found</h1>}></Route>


      </Routes>
    </Sidebar>

  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  count: state.count,
  staff:state.staff
})


const mapDispatchToProps = (dispatch) => ({
  GetUserList: (data) => dispatch(GetUserList(data)),
  Staff_List: (data) => dispatch(Staff_List(data)),



})


export default connect(mapStateToProps, mapDispatchToProps)(App);
