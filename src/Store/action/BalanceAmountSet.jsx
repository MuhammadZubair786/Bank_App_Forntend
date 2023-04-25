const BalanceAmountSet = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'AccountBalanceSet',
            data:data
        })
        // console.log(data)
    }
}


export default BalanceAmountSet