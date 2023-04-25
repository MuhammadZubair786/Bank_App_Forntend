import { Paper, Typography } from '@mui/material';
import { Container, Col, Row, Table } from 'react-bootstrap';
import { BsBank2 } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Logo from '../../assets/img.png'
import TextField from '@mui/material/TextField';
import "../Login.css"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import StaffAccount from '../../Store/action/StaffAccount';
// import Table from '@mui/material/Table';
import { connect } from 'react-redux';

function Admin_Dashboard(props) {

    let [email, setemail] = useState()
    let [password, setpassword] = useState()
    let [confpassword, setconfpassword] = useState()
    let [Firstname, setFirstname] = useState()

    const staff_Create=()=>{

        if (Firstname == undefined || Firstname == "") {
            console.log(Firstname, email, password, confpassword)
            // return 
            toast.error("Enter Full Name", {
                position: "bottom-center",

            })
        }
        else if (email == undefined || email == "") {
            console.log(Firstname, email, password, confpassword)
            // return 
            toast.error("Enter Email Address", {
                position: "bottom-center",

            })
        }
        else if (password == undefined || password == "") {
            console.log(Firstname, email, password, confpassword)
            // return 
            toast.error("Enter Password", {
                position: "bottom-center",

            })
        }
        else if (confpassword == undefined || confpassword == "") {
            console.log(Firstname, email, password, confpassword)
            // return 
            toast.error("Enter Confirm Password", {
                position: "bottom-center",

            })
        }
        else if (password.length < 8) {
            // return 
            toast.error("Password Must Be Greater Then 8 Letter", {
                position: "bottom-center",
                // theme: "dark",

            })
        }
        else if (confpassword !== password) {
            console.log(Firstname, email, password, confpassword)
            // return 
            toast.error("Password Not Matched", {
                position: "bottom-center",

            })
        }
        else {
            const isValid = /\S+@\S+\.\S+/.test(email);
            console.log(isValid)
            if (isValid == false) {
                toast.error("Email is Not Valid", {
                    position: "bottom-center",

                })
            }
            else {
              
                let res = isEmailRegistered(props, email)
                if (res == true) {
                    toast.error("This Email Already Regsister", {
                        position: "bottom-center",

                    })
                }
                else {
                    props.StaffAccount({
                        email: email,
                        password: password,
                      
                        name: Firstname,
                       
                        status:true
                    })

                    toast.success("Staff Regsister Succefully", {
                        position: "bottom-center",

                    })


                }

            
            }
        }
    
    }


    const isEmailRegistered = (state, email) => {
        return state.staff.some(user => user.email === email);
    };

    return (
        <>

            <Container fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }} >
                <Row>
                    <Col lg={6} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />

                    </Col>

                    <Col lg={6} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>Super Admin</h5>
                    </Col>
                </Row>

            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col lg={12} className='text-center'>
                    <Link to="/Admin_Dashboard">
                        <Button variant="contained" style={{ marginLeft: "10px", width: "22%", margin: "1%", backgroundColor: "#01065D" }} >Create Staff</Button>
                        </Link>
                        <Link to="/View_Staff">
                        <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} >View Staff</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6} style={{ border: "1px solid grey" }} className='text-center mt-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <TextField value={Firstname} onChange={(e)=>setFirstname(e.target.value)} size="small" style={{ width: "80%", marginTop: "5%" }} id="outlined-basic" label="Enter Staff Name" variant="outlined" className='form-control' />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <TextField value={email} onChange={(e)=>setemail(e.target.value)} size="small" style={{ width: "80%", margin: "1%" }} id="outlined-basic" label="Enter Staff Email" variant="outlined" className='form-control' />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <TextField value={password} onChange={(e)=>setpassword(e.target.value)} size="small" style={{ width: "80%", margin: "1%" }} id="outlined-basic" label="Enter Password" variant="outlined" className='form-control' />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <TextField value={confpassword} onChange={(e)=>setconfpassword(e.target.value)} size="small" style={{ width: "80%", margin: "1%" }} id="outlined-basic" label="Enter Confirm Password" variant="outlined" className='form-control' />

                        </Form.Group>
                        <br/>

                        <Button size="small" onClick={()=>staff_Create()}   style={{ backgroundColor: "#01065D", height: "40px",color:"white",width:"50%",display:"block",margin:"auto" }} type="submit" className='form-control' >
                            Create
                        </Button>
                        <ToastContainer autoClose={1000}
                                   hideProgressBar={false}
                                    theme="dark"
                                />
                        <br/>

                    </Col>
                    <Col lg={3}></Col>
                </Row>

            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({
    user: state.user,
    count: state.count,
    staff:state.staff
})


const mapDispatchToProps = (dispatch) => ({
    StaffAccount: (data) => dispatch(StaffAccount(data)),


})


export default connect(mapStateToProps, mapDispatchToProps)(Admin_Dashboard);

