const StaffAccount = (data)=>{
    // console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'AddStaff',
            data:data
        })
        // console.log(data)
    }
}


export default StaffAccount