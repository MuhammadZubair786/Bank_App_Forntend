const AddUsers = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'AddUser',
            data:data
        })
        // console.log(data)
    }
}


export default AddUsers