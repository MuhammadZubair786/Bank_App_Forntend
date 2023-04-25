
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import { Radio, Typography } from "@mui/material";
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import AddAccount from "../../Store/action/AddAccount";
import { connect } from "react-redux";

function CreateAccount(props) {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    let [initalAmount, setinitalAmount] = useState(0)
    const [topping, setTopping] = useState()

    const onOptionChange = e => {
        setTopping(e.target.value)
    }

    const setAccount = () => {
        console.log(props)

        console.log(initalAmount)
        console.log(topping)
        if (topping == undefined) {
            toast.error("Must Select Account Type", {
                position: "bottom-center",

            })
        }
        else {
            let loginData = localStorage.getItem("Login_User")
            // console.log(JSON.parse(loginData))
            // console.log(props)
            const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
            const accountNumber = randomNumber.toString().substring(0, 10);

            let date= new Date()
            props.AddAccount({
                account_type: topping,
                balance: initalAmount,
                chk: JSON.parse(loginData),
                status: false,
                accountNumber:accountNumber,
                Date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
            })
            console.log(props.user)

            toast.success("Account Creation under process", {
                position: "bottom-center",

            })
        }

    }




    return (
        <Container>
            <Row className="mt-5">
                <Col lg={3}></Col>
                <Col lg={7}>
                    <Paper elevation={16}>
                        <Typography>
                            <h1 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingTop: "10px", textAlign: "center" }}>Create Account Form </h1>

                          

                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "20px", margin: "auto", width: "60%" }}>

                                <TextField value={initalAmount} onChange={(e) => setinitalAmount(e.target.value)} id="outlined-basic" label="Enter Inital Deposit" variant="outlined" className='form-control' />

                            </Form.Group>
                            <h4 style={{ color: "black", textAlign: "center" }}>Select Type Of Account</h4>
                            <div style={{ border: "1px solid grey ", width: "50%", margin: "auto", marginTop: "10px" }}>
                                <h4 style={{ marginTop: "5px" }}>
                                    <input type="radio" name="type" onChange={onOptionChange} id="type" style={{ marginLeft: "20px" }} value={"Saving Bank"} />&emsp;Saving Bank

                                </h4>
                                <h4 style={{ marginTop: "10px" }}>

                                    <input type="radio" name="type" onChange={onOptionChange} id="" style={{ marginLeft: "20px" }} value={"Current Account"} />&emsp;Current Account
                                </h4>

                            </div>
                            <div style={{ textAlign: "right", marginRight: "30px", marginTop: "1%" }}>
                                <ToastContainer autoClose={1000}
                                    hideProgressBar={false}
                                    theme="dark"
                                />
                                <Button variant="contained" color="success" onClick={() => setAccount()} >
                                    Submit
                                </Button>
                            </div>

                            <br />
                            <br /> <br />


                        </Typography>
                    </Paper>

                </Col>
                <Col lg={2}></Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    count: state.count
})


const mapDispatchToProps = (dispatch) => ({
    AddAccount: (data) => dispatch(AddAccount(data)),


})


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);