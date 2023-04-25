import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import AddNewTransaction from "../../Store/action/AddNewTranscation";
import BalanceAmountSet from "../../Store/action/BalanceAmountSet";

import { connect } from "react-redux";

function TransferMoney(props) {

    let [useraccount, setuseraccount] = useState([])
    let [amount, setamount] = useState()
    let [Reason, setReason] = useState()
    let [selectaccount, setselectaccount] = useState()
    let [accountBeneficiary, setaccountBeneficiary] = useState([])
    let [selectaccountbanlance, setselectaccountbanlance] = useState()
    let [accountno,setaccountno]=useState()

    const [topping, setTopping] = useState()

    const onOptionChange = e => {
        console.log(e.target.value)
        let split = e.target.value.toString().split(",")
        // console.log(split)
        setTopping(split[0])
        setselectaccountbanlance(split[1])
        setaccountno(split[2])
    }

    useEffect(() => {
        let loginData = JSON.parse(localStorage.getItem("Login_User"))
        console.log(loginData["accountsCreate"])
        setuseraccount(loginData["accountsCreate"])

        console.log(loginData["UsersBenficiary"])
        setaccountBeneficiary(loginData["UsersBenficiary"])

    }, [])


    const submit_Data = () => {
        console.log(amount)
        if (topping == undefined || topping == "") {
            toast.error("Plz Select Account ", {
                position: "bottom-center",

            })


        }
        else if (selectaccount == undefined || selectaccount == "") {
            toast.error("Plz Select Send Amount Account ", {
                position: "bottom-center",

            })

        }
        else if (amount == undefined || amount == "") {
            toast.error("Enter Amount", {
                position: "bottom-center",

            })
        }
        else if (Reason == undefined || Reason == "") {
            toast.error("Enter Reason", {
                position: "bottom-center",

            })
        }
        else {
            console.log(selectaccountbanlance)
            console.log(topping)
            let checkamount = parseInt(selectaccountbanlance) - parseInt(amount)
            console.log(checkamount)
            if (checkamount < 0) {
                toast.error("Current Balance is Low Then Your Transaction", {
                    position: "bottom-center",

                })
            }
            else{

                let date = new Date()

                props.AddNewTransaction({
                    accountno:accountno,
                    sendamount:amount,
                    recieveaccountno:selectaccount,
                    totalamount:selectaccountbanlance,
                    account_type:topping,
                    reason:Reason,
                    Date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
                    transactiontype : "Credit"
                })

                toast.success("Successfully Transaction Submit", {
                    position: "bottom-center",

                })

                window.location.reload()

                // props.BalanceAmountSet({
                //     accountno:accountno,
                //     sendamount:amount,
                //     totalamount:selectaccountbanlance,
                //     account_type:topping,
                //     recieveaccountno:selectaccount,
                // })
            }
        }

    }




    return (
        <Container>
            <Row>
                <Col lg={2}>
                </Col>
                <Col lg={8}>
                    <Paper elevation={16} >
                        <Typography>
                            <h1 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingTop: "20px", paddingLeft: "40px" }}>Select Source Account</h1>
                            <Table striped bordered hover size="lg" style={{ margin: "20px", width: "90%", textAlign: "center" }}>
                                <thead>
                                    <tr>
                                        <th>Ac No</th>
                                        <th>Balance </th>
                                        <th>Ac Type</th>
                                        <th>Select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {useraccount.map((v, i) => {
                                        return (
                                            <tr>
                                                <td>{v.accountNumber}</td>
                                                <td>${v.balance}</td>
                                                <td>{v.account_type}</td>
                                                <td>
                                                    <input type="radio" name="type" id="" onChange={onOptionChange} value={v.account_type + "," + v.balance+ "," +v.accountNumber} />
                                                </td>
                                            </tr>
                                        )
                                    })}



                                </tbody>
                            </Table>
                            <Typography style={{ marginLeft: "60px" }}>
                                <Row>
                                    <Col lg={4}>
                                        <h5>Select To Account</h5>

                                        <select onChange={(e) => setselectaccount(e.target.value)} style={{ textAlign: "center", backgroundColor: "green", color: "white", fontSize: "18px" }}>
                                            <option value={""} selected disabled>Selected Account </option>
                                            {
                                                accountBeneficiary.map((v, i) => {
                                                    return (
                                                        <option value={v.accountno}>
                                                            {v.accountno}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </Col>
                                    <Col lg={3} style={{ marginTop: "20px" }}>
                                        <input type="text" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter Amount" style={{ textAlign: "center", height: "30px" }} />

                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg={3}></Col>
                                    <Col lg={4}>
                                        <input type="text" value={Reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" style={{ textAlign: "center", height: "40px" }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}></Col>
                                    <Col lg={6} style={{ textAlign: "center", display: "block" }}>
                                        <ToastContainer autoClose={1000}
                                            hideProgressBar={false}
                                            theme="dark"
                                        />
                                        <Button variant="danger" onClick={() => submit_Data()}>&emsp;&emsp;Transfer&emsp;&emsp;</Button>
                                    </Col>

                                </Row>



                            </Typography>
                            <br />


                        </Typography>
                    </Paper>
                </Col>
                <Col lg={2}>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    count: state.count
})


const mapDispatchToProps = (dispatch) => ({
    AddNewTransaction: (data) => dispatch(AddNewTransaction(data)),
    BalanceAmountSet: (data) => dispatch(BalanceAmountSet(data)),



})


export default connect(mapStateToProps, mapDispatchToProps)(TransferMoney);