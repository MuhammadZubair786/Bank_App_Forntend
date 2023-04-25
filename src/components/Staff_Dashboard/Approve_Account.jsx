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
import { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
import { connect } from 'react-redux';
import Approve_Benefiers from '../../Store/action/Approve_Benficiary'
import { ToastContainer, toast } from 'react-toastify';
import Approve_Accounts from '../../Store/action/Approve_account';

function Approve_Account(props) {

    let [beneficiary, setbeneficiary] = useState([])

    useEffect(() => {
        accounttransaction()
    }, [])



    const approve_ben = (data) => {
        console.log(data)
        props.Approve_Accounts(data)

        setTimeout(() => {
            toast.success("Successfully Approve Account", {
                position: "bottom-center",

            })
            accounttransaction()
        }, 2000)
    }


    const accounttransaction = () => {
        let user = JSON.parse(localStorage.getItem("users"))
        console.log(user)
        if (user != undefined) {

            let appbeneficiary = []
            for (var i = 0; i < user.length; i++) {
                for (var j = 0; j < user[i]["accountsCreate"].length; j++) {
                    console.log(user[i]["accountsCreate"][j]["status"])
                    if (user[i]["accountsCreate"][j]["status"] == false) {
                        appbeneficiary.push(user[i]["accountsCreate"][j])

                    }

                }
            }

            setbeneficiary(appbeneficiary)
        }

    }

    return (
        <>
            <Container style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }} className='mt-2'>
                <Row>
                    <Col lg={6} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />
                        <Button variant="contained" color="success" style={{ margin: "5px", marginLeft: "50px" }}>Transfer</Button>
                    </Col>

                    <Col lg={6} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <Link to="/login">

                            <b style={{ color: "white", fontFamily: 'Faster', marginRight: "12%" }}>Log Out</b>
                        </Link>

                        <h5 style={{ color: "white", fontFamily: 'Faster', display: "inline" }}>Staff Corner</h5>
                    </Col>
                </Row>

            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col lg={12} className='text-center'>
                        <Link to="/StaffDashborad">
                            <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} >By Account Number</Button>
                        </Link>
                        <Link to="/Approve_Benefiers">
                            <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} >Approve Beneficiary</Button>
                        </Link>
                        <Link to="/Approve_Account">
                            <Button variant="contained" style={{ marginLeft: "10px", width: "22%", margin: "1%", backgroundColor: "#01065D" }} >Approve Account</Button>
                        </Link>
                        <Link to="/Enabled_Disabled">
                            <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} > Enable/Block Customer</Button>
                        </Link>
                    </Col>
                </Row>
                {/* <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "5%", width: "60%", marginLeft: "40%" }}>

                            <TextField id="outlined-basic" size="small" placeholder="Enter Account Number" variant="outlined" className='form-control' />

                        </Form.Group>

                    </Col>
                    <Col>
                        <Button variant="contained" color="success" style={{ marginLeft: "60px", width: "10px", margin: "2%" }} >Go</Button>
                    </Col>
                </Row> */}
                {/* <Row className='mt-4 text-center'>
                    <Col lg={1}>
                    </Col>
                    <Col lg={3}>
                        <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold" }}>Acc No.12345</h5>

                    </Col>
                    <Col lg={3}>
                        <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold" }}>Name . John Test</h5>

                    </Col>
                    <Col lg={3}>
                        <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold" }}>Balance : 12,3456</h5>

                    </Col>
                    <Col lg={2}>
                    </Col>
                </Row> */}
                <Row>
                    <Col lg={12}>
                        {/* <h5 style={{textAlign:"center",border:"1px solid black",margin:"16px",color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingLeft: "40px", }}>Account Details</h5> */}
                        <Table bordered hover size="lg" style={{ margin: "20px", width: "90%", textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th colSpan={7} style={{ fontSize: "28px" }}>Newly Added</th>
                                </tr>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                    <th>Beneficiary Account_Number </th>
                                    <th>Balance</th>

                                    <th>Benefiers Add Date</th>
                                    <th>Approve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    beneficiary.map((v, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{v.name}</td>
                                                <td>{v.email}</td>
                                                <td>{v.accountNumber}</td>
                                                <td>{v.balance}</td>

                                                <td>{v.Date}</td>
                                                <td>
                                                    <Button variant="contained" color="success" onClick={() => approve_ben(v)}>
                                                        Approve
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }




                            </tbody>
                        </Table>

                        <ToastContainer autoClose={1000}
                            hideProgressBar={false}
                            theme="dark"
                        />

                        <br />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({
    user: state.user,
    count: state.count
})


const mapDispatchToProps = (dispatch) => ({
    Approve_Accounts: (data) => dispatch(Approve_Accounts(data)),


})


export default connect(mapStateToProps, mapDispatchToProps)(Approve_Account);