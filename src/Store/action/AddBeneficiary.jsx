const AddBeneficiary = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'Add_Beneficiary',
            data:data
        })
        // console.log(data)
    }
}


export default AddBeneficiary