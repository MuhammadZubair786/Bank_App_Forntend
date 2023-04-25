import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Login from './Login';
import "./Sidebar.css"
import SignUp from './Signup';
import ForgotPassword from './forgotPassword';
import UpdatePassword from './UpdatePassword';
import MissingDetails from './MissingDetails';
import { Container, Col, Row } from 'react-bootstrap';
import { BsBank2 } from "react-icons/bs";
import { IoIosCreate } from 'react-icons/io'

import { BiBookAdd, BiTransfer } from 'react-icons/bi'
import { MdOutlineRemoveFromQueue, MdViewQuilt } from 'react-icons/md'
import Staff_Login from './Staff_Dashboard/Staff_Login';
import Staff_Dashboard from './Staff_Dashboard/Staff_Dashboard';
import Approve_Benefiers from './Staff_Dashboard/Approve_Benefiers';
import Approve_Account from './Staff_Dashboard/Approve_Account';
import Enable_Disable_Account from './Staff_Dashboard/Enable_Disable_Account';
import Admin_Dashboard from './Admin/Admin_Dashboard';
import View_Staff from './Admin/View_Staff';




const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/createAccount",
            name: "Create Account",
            icon: <IoIosCreate />
        },
        {
            path: "/addBeneficiary",
            name: "Add Beneficiary",
            icon: <BiBookAdd />
        },
        {
            path: "/RemoveBenficiary",
            name: "Remove Beneficiary",
            icon: <MdOutlineRemoveFromQueue />
        },
        {
            path: "/TransferMoney",
            name: "Transfer Money",
            icon: <BiTransfer />
        },
        {
            path: "/ViewStatements",
            name: "View Statement",
            icon: <MdViewQuilt />
        },

    ]

    const location = useLocation();

    // Hide the sidebar on the login page
    if (location.pathname === "/") {
        return <Login />;
    }
    if (location.pathname === "/regsister") {
        return <SignUp />;
    }
    if (location.pathname === "/forgotPassword") {
        return <ForgotPassword />;
    }
    if (location.pathname === "/UpdatePassword") {
        return <UpdatePassword />
    }
    if (location.pathname === "/Missingdetails") {
        return <MissingDetails />
    }
    if (location.pathname === "/login") {
        return <Staff_Login />
    }
    if (location.pathname == "/StaffDashborad") {
        return <Staff_Dashboard />
    }
    if (location.pathname === "/Approve_Benefiers") {
        return <Approve_Benefiers />
    }
    if (location.pathname === "/Approve_Account") {
        return <Approve_Account />
    }
    if (location.pathname == "/Enabled_Disabled") {
        return <Enable_Disable_Account />
    }
    if (location.pathname == "/Admin_Dashboard") {
        return <Admin_Dashboard />
    }
    if (location.pathname == "/View_Staff") {
        return <View_Staff />
    }

    return (
        <>
            <Container fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }}>
                <Row>
                    <Col lg={3} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />
                    </Col>
                    <Col lg={3} style={{ textAlign: "center", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Faster', }}>
                            <Link to="/Profile" style={{ textDecoration: "none", color: "white" }}>

                                Profile
                            </Link>
                        </h5>
                    </Col>
                    <Col lg={3} style={{ textAlign: "center", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Faster', }}>
                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                Log Out
                            </Link>
                        </h5>
                    </Col>

                    <Col lg={2} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <Link to="/customerDashboard" style={{ textDecoration: "none", color: "white" }}>
                            <h5 style={{ color: "white", fontFamily: 'Faster', }}>Welcome Asad</h5>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <div className="container-fluid" >

                <div className="row">

                    <div style={{ width: "310px" }} className="sidebar col col-lg-4">

                        {
                            menuItem.map((item, index) => (
                                index == 0 ?
                                    <NavLink activeClassName="active-link" to={item.path} key={index} className="link" style={{ marginTop: "40px" }} >
                                        <div className="icon">{item.icon}</div>
                                        <div className="link_text" style={{ fontFamily: "Faster", fontSize: "25px" }}>{item.name}</div>
                                    </NavLink>
                                    :
                                    <NavLink activeClassName="active-link" to={item.path} key={index} className="link" style={{ marginTop: "20px" }}  >
                                        <div className="icon">{item.icon}</div>
                                        <div className="link_text" style={{ fontFamily: "Faster", fontSize: "25px" }}>{item.name}</div>
                                    </NavLink>
                            ))
                        }
                    </div>
                    <div className="col">
                        <main>{children}</main>

                    </div>

                </div>

            </div>
            <Container className='footer' fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px grey" }}>
                <Row>

                    <Col lg={12} style={{ textAlign: "center", }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>All right resereved@2023</h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Sidebar;