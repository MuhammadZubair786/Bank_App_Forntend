const Approve_Benefiers = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'ApproveBeneficiary',
            data:data
        })
        // console.log(data)
    }
}


export default Approve_Benefiers