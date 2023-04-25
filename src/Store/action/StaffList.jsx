const Staff_List = (data)=>{
    console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'ListStaff',
            data:data
        })
        console.log(data)
    }
}


export default Staff_List