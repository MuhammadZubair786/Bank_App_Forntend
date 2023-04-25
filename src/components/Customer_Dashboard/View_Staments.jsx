import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import { GrCaretPrevious } from 'react-icons/gr'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function View_Statements() {

    let [useraccounts, setuseraccounts] = useState([])

    let [seluseraccount, setseluseraccount] = useState("")
    let [balance, setbalance] = useState("")
    let [trasactionhis, settrasactionhis] = useState([])

    // let [name]

    useEffect(() => {
        let userlogindata = JSON.parse(localStorage.getItem("Login_User"))
        console.log(userlogindata["accountsCreate"])
        setuseraccounts(userlogindata["accountsCreate"])


    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        setseluseraccount(e.target.value["accountNumber"])
        setbalance(e.target.value["balance"])
        settrasactionhis([])
    }

    const transactionhistory = () => {
        let userlogindata = JSON.parse(localStorage.getItem("Login_User"))
        console.log(userlogindata["transactionHistory"])
        let tranhis = []
        for (var i = 0; i < userlogindata["transactionHistory"].length; i++) {

            if (seluseraccount == userlogindata["transactionHistory"][i]["sendaccountno"]) {
                console.log(userlogindata["transactionHistory"][i])
                tranhis.push(userlogindata["transactionHistory"][i])

            }
        }
        settrasactionhis(tranhis)

    }

    return (
        <Container>
            <Row>
                <Col lg={2}>
                </Col>
                <Col lg={8}>
                    <Paper elevation={16} >
                        <Typography>
                            <br />
                            <Row>
                                <Col lg={6}>
                                    <Form.Group >
                                        <Box sx={{ minWidth: 120, textAlign: "center" }}>
                                            <FormControl style={{ width: "80%", textAlign: "center" }}>
                                                <InputLabel id="demo-simple-select-label">Select Account</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={seluseraccount}
                                                    label="Select Account"
                                                    size="small"
                                                    onChange={handleChange}
                                                >
                                                    {useraccounts.map((v, i) => {
                                                        return (
                                                            <MenuItem key={i} value={v}>{v.accountNumber}</MenuItem>
                                                        )
                                                    })}


                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Form.Group>

                                    <br />
                                </Col>

                                <Col lg={6}>
                                    {

                                        seluseraccount == ""
                                            ?
                                            null
                                            :
                                            <Button variant="contained" style={{
                                                borderRadius: 10,
                                                backgroundColor: "#F22248",
                                                padding: "5px 5px",
                                                fontSize: "16px"

                                            }}
                                                onClick={() => transactionhistory()}
                                            >Show</Button>
                                    }

                                </Col>

                            </Row>
                            <Row>

                                <Col lg={5}>
                                    {
                                        seluseraccount == "" ?
                                            null
                                            :
                                            <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingLeft: "40px", }}>
                                                AC NO.{seluseraccount}
                                            </h5>
                                    }

                                </Col>
                                <Col lg={5}>
                                    {
                                        balance == "" ?
                                            null :

                                            <h5 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingLeft: "40px", }}>
                                                Balance : ${balance}
                                            </h5>
                                    }
                                </Col>
                                <Col lg={3}>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {/* <h5 style={{textAlign:"center",border:"1px solid black",margin:"16px",color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingLeft: "40px", }}>Account Details</h5> */}
                                    <Table striped bordered hover size="lg" style={{ margin: "20px", width: "90%", textAlign: "center" }}>

                                        {
                                            trasactionhis.length > 0
                                                ?
                                                <thead>
                                                    <tr>
                                                        <th colSpan={4}>Account Details</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Reference </th>
                                                        <th>Amount</th>
                                                        <th>Debit/Credit</th>
                                                    </tr>
                                                </thead>
                                                :
                                                null

                                        }

                                        <tbody>
                                            {
                                                trasactionhis.map((v, i) => {
                                                    return (
                                                        <tr>
                                                            <td>{v.Date}</td>
                                                            <td>{v.recieveaccountno}</td>
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
                                    <Row>
                                        <Col lg={6}>
                                        </Col>

                                        {/* <Col lg={2} style={{ textAlign: "right", }}>

                                            <button style={{ color: "white", backgroundColor: "#01065D" }}>
                                                &nbsp;Previous&nbsp;
                                            </button>
                                        </Col>
                                        <Col lg={1} style={{ textAlign: "center", color: "white" }}>
                                            <button style={{ color: "white", backgroundColor: "#01065D" }}>
                                                &nbsp;1&nbsp;
                                            </button>
                                            <br />
                                        </Col>
                                        <Col lg={1} style={{ textAlign: "left", color: "white" }}>
                                            <button style={{ color: "white", backgroundColor: "#01065D" }}>
                                                &nbsp; 2&nbsp;
                                            </button>
                                            <br />
                                        </Col>
                                        <Col lg={2} style={{ textAlign: "left", color: "white" }}>
                                            <button style={{ color: "white", backgroundColor: "#01065D" }}>

                                                &nbsp;  Next &nbsp;
                                            </button>
                                            <br />
                                        </Col> */}

                                    </Row>
                                    <br />
                                </Col>
                            </Row>
                        </Typography>
                    </Paper>
                </Col>
                <Col lg={2}>
                </Col>
            </Row>
        </Container>
    )
}

export default View_Statements