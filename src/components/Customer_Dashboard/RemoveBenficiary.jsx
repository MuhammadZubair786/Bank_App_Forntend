
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Col, Row } from 'react-bootstrap';
import { IoMdRemoveCircleOutline } from 'react-icons/io'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    number, name
) {
    return { number, name };
}



const rows = [
    createData('Ac No 12345', "Harry"),
    createData('Ac No 12345', "Harry",),
    createData('Ac No 12345', "Harry",),
    createData('Ac No 12345', "Harry",),
    createData('Ac No 12345', "Harry",),
];

function RemoveBenficiary() {

    let [Beneficiary,setBeneficiary] = useState([])

    useEffect(() => {
        let loginData = JSON.parse(localStorage.getItem("Login_User"))
        console.log(loginData["UsersBenficiary"])
        setBeneficiary(loginData["UsersBenficiary"])

    }, [])


    return (
        <Container>
            <Row >

                <Col lg={2}>
                </Col>
                <Col lg={8} className='mt-5'>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table" >
                            <TableHead >
                                <TableRow style={{ backgroundColor: "blue" }}>
                                    <StyledTableCell>Account Number</StyledTableCell>
                                    <StyledTableCell>Account Type</StyledTableCell>
                                    <StyledTableCell >View</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Beneficiary.map((v,i) => (
                                    v.status == true ?
                                    <StyledTableRow key={i}>
                                        <StyledTableCell component="th" scope="row">
                                            {v.accountno}
                                        </StyledTableCell>
                                        <StyledTableCell>{v.type}</StyledTableCell>
                                        <StyledTableCell><IoMdRemoveCircleOutline size={30} color='red' /></StyledTableCell>



                                    </StyledTableRow>
                                    :
                                    null
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
                <Col lg={2}>
                </Col>

            </Row>

        </Container>
    )
}

export default RemoveBenficiary