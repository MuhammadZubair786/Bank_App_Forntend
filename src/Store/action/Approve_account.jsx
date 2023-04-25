const Approve_Accounts = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'AccountApprove',
            data:data
        })
        // console.log(data)
    }
}


export default Approve_Accounts