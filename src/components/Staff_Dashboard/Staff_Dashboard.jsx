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
// import Table from '@mui/material/Table';



function Staff_Dashboard() {

    let [accountno, setaccountno] = useState()
    let [accountransaction, setaccountransaction] = useState([])

    let [balance, setbalance] = useState("")
    let [usernamestate, setusernamestate] = useState("")

    // let []


    const accounttransaction = () => {
        let user = JSON.parse(localStorage.getItem("users"))
        let account_balance = 0
        let username = ""
        let chk = false
        let trans_his = []
        for (var i = 0; i < user.length; i++) {
            // console.log(user[i]["accountsCreate"].length)
            let account_balance = 0
            for (var j = 0; j < user[i]["transactionHistory"].length; j++) {
                if (accountno == user[i]["transactionHistory"][j]["sendaccountno"]) {
                    console.log(user[i]["transactionHistory"][j])
                    trans_his.push(user[i]["transactionHistory"][j])
                    username = user[i]["name"]


                    chk = true

                }

            }
        }
        for (var i = 0; i < user.length; i++) {
            // console.log(user[i]["accountsCreate"].length)

            for (var j = 0; j < user[i]["accountsCreate"].length; j++) {
                if (accountno == user[i]["accountsCreate"][j]["accountNumber"]) {
                    console.log(user[i]["accountsCreate"][j]["balance"])
                    account_balance = user[i]["accountsCreate"][j]["balance"]


                }

            }
        }
        if (chk == false) {
            console.log("not get history")
            setaccountransaction([])

        }
        else {
            console.log("get his")
            setaccountransaction(trans_his)
            setbalance(account_balance)
            setusernamestate(username)
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
                            <Button variant="contained" style={{ marginLeft: "10px", width: "22%", margin: "1%", backgroundColor: "#01065D" }} >By Account Number</Button>
                        </Link>
                        <Link to="/Approve_Benefiers">
                            <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} >Approve Beneficiary</Button>
                        </Link>
                        <Link to="/Approve_Account">
                            <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} >Approve Account</Button>
                        </Link>
                        <Link to="/Enabled_Disabled">
                            <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} > Enable/Block Customer</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "5%", width: "60%", marginLeft: "40%" }}>

                            <TextField id="outlined-basic" value={accountno || ""} onChange={(e) => setaccountno(e.target.value)} size="small" placeholder="Enter Account Number" variant="outlined" className='form-control' />

                        </Form.Group>

                    </Col>
                    <Col>
                        <Button variant="contained" color="success" style={{ marginLeft: "60px", width: "10px", margin: "2%" }} onClick={() => accounttransaction()} >Go</Button>
                    </Col>
                </Row>
                <Row className='mt-4 text-center'>
                    <Col lg={1}>
                    </Col>
                    <Col lg={3}>
                        {accountransaction.length > 0 ?
                            <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold" }}>Acc No.{accountno}</h5>
                            :
                            null
                        }


                    </Col>
                    <Col lg={3}>
                        {accountransaction.length > 0 ?
                            <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold" }}>Name . {usernamestate}</h5>
                            :
                            null
                        }


                    </Col>
                    <Col lg={3}>
                        {accountransaction.length > 0 ?
                            <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold" }}>Balance : ${balance}</h5>
                            :
                            null
                        }


                    </Col>
                    <Col lg={2}>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        {/* <h5 style={{textAlign:"center",border:"1px solid black",margin:"16px",color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingLeft: "40px", }}>Account Details</h5> */}
                        <Table bordered hover size="lg" style={{ margin: "20px", width: "90%", textAlign: "center" }}>
                            <thead>
                                {
                                    accountransaction.length > 0 ?
                                        <tr>
                                            <th colSpan={4} style={{ fontSize: "28px" }}>Account Details</th>
                                        </tr>
                                        :
                                        null
                                }
                                {
                                    accountransaction.length > 0 ?
                                        <tr>
                                            <th>Date</th>
                                            <th>Reference </th>
                                            <th>Amount</th>
                                            <th>Debit/Credit</th>
                                        </tr>
                                        :
                                        null
                                }


                            </thead>
                            <tbody>
                                {
                                    accountransaction.map((v, i) => {
                                        return (
                                            <tr>

                                                <td>{v.Date}</td>
                                                <td>{v.sendaccountno}</td>
                                                <td>${v.sendamount}</td>
                                                <td>
                                                    {v.transactiontype}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </Table>
                        {/* <Row>
                            <Col lg={6}>
                            </Col>

                            <Col lg={2} style={{ textAlign: "right", }}>
                                <button style={{ color: "white", backgroundColor: "#01065D" }}>
                                    &emsp;Previous&emsp;
                                </button>
                            </Col>
                            <Col lg={1} style={{ textAlign: "center", color: "white" }}>
                                <button style={{ color: "white", backgroundColor: "#01065D" }}>
                                    &emsp;1  &emsp;
                                </button>
                                <br />
                            </Col>
                            <Col lg={1} style={{ textAlign: "left", color: "white" }}>
                                <button style={{ color: "white", backgroundColor: "#01065D" }}>
                                    &emsp; 2  &emsp;
                                </button>
                                <br />
                            </Col>
                            <Col lg={2} style={{ textAlign: "left", color: "white" }}>
                                <button style={{ color: "white", backgroundColor: "#01065D" }}>

                                    &emsp;  Next   &emsp;
                                </button>
                                <br />
                            </Col>

                        </Row> */}
                        <br />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default Staff_Dashboard