const AddAccount = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'AddAccount',
            data:data
        })
        // console.log(data)
    }
}


export default AddAccount