
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";

function CustomerDashboard() {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    let [useraccount, setuseraccount] = useState([])

    useEffect(() => {
        let loginData = JSON.parse(localStorage.getItem("Login_User"))
        console.log(loginData["accountsCreate"])
        setuseraccount(loginData["accountsCreate"])

    }, [])


    return (
        <Container>
            <Row >
                <Col lg={2}></Col>
                <Col lg={8} className="text-center">

                    {
                        useraccount.length != 0 ?
                            useraccount.map((v, i) => {

                                return (
                                    v.status == true ?
                                        <Paper elevation={16} className="mt-5" >

                                            <Typography>
                                                <h1 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingTop: "10px" }}>Account Type : {v.account_type}</h1>
                                                <h1 style={{ color: "black", fontFamily: 'Faster', marginTop: "15px" }}>Account Balance : ${v.balance}</h1>
                                                <h3 style={{ color: "black", fontFamily: "Faster", marginTop: "15px" }}>Enable/Disable   <Switch

                                                    {...label} defaultChecked style={{ color: "blue" }} />
                                                    &emsp;<Button variant="outlined" color="primary">
                                                        View More
                                                    </Button>
                                                    <br />
                                                </h3>
                                                <br />

                                            </Typography>
                                        </Paper> :
                                        null
                                )

                            })

                            :
                            <Typography>
                                <h1 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingTop: "10px" }}>No Account</h1>
                            </Typography>
                    }


                </Col>
                <Col lg={2}></Col>
            </Row>
            {/* <Row className="mt-5">
                <Col lg={3}></Col>
                <Col lg={6} className="text-center">
                    <Paper elevation={16} >
                        <Typography>
                            <h1 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingTop: "10px" }}>Account Type : CA</h1>
                            <h1 style={{ color: "black", fontFamily: 'Faster', marginTop: "15px" }}>Account Balance : 13,245</h1>
                            <h3 style={{ color: "black", fontFamily: "Faster", marginTop: "15px" }}>Enable/Disable   <Switch

                                {...label} defaultChecked style={{ color: "blue" }} />
                                &emsp; <Button variant="outlined" color="primary">
                                    View More
                                </Button>
                                <br />
                            </h3>
                            <br />

                        </Typography>
                    </Paper>

                </Col>
                <Col lg={3}></Col>
            </Row> */}
        </Container>
    )
}

export default CustomerDashboard