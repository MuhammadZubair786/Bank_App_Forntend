import { Paper, Typography } from '@mui/material';
import { Container, Col, Row } from 'react-bootstrap';
import { BsBank2 } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/img.png'
import TextField from '@mui/material/TextField';
import "./Login.css"
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./forgot.css"

function MissingDetails() {




    return (
        <div style={{ backgroundColor: "white" }}>
            <Container fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }}>
                <Row>
                    <Col lg={6} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />
                    </Col>
                    <Col lg={6} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>Staff Corner</h5>
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: "5%", marginTop: "120px" }}   >
                <Row>
                    <Col lg={4}>

                    </Col>

                    <Col lg={6} style={{ border: "1px solid #020431", textAlign: "justify", boxShadow: "10px 10px 5px grey", borderRadius: "2%", padding: "2%", marginTop: "50" }}>

                        <h3 className='m-4 p-3' style={{ color: "red", backgroundColor: "#D89D9A " }}>
                            <b>
                                SORRY YOUR USER NAME ,SECURITY QUESTIONS AND ANSWER IS MISMATCHED
                            </b>

                        </h3>
                        <br/>
                        <br/>
                        <Row>
                            
                                <Col lg={12}>
                                    <h3 style={{ color: "black", textAlign: "center", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>
                                      Already Have An Account ?  <Link to={"/"}>
                                           Login
                                        </Link>
                                    </h3>

                                </Col>
                            </Row>



                    </Col>
                    <Col lg={2}>

                    </Col>
                </Row>
            </Container>
            <Container className='footer' fluid style={{
                backgroundColor: "#01065D", boxShadow: "10px 10px 100px grey",

            }}>
                <Row>

                    <Col lg={12} style={{ textAlign: "center", }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>All right resereved@2023</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MissingDetails