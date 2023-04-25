const AddNewTransaction = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'AddNewTrasaction',
            data:data
        })
        // console.log(data)
    }
}


export default AddNewTransaction