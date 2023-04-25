const GetUserList = (data)=>{
    console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'ListUser',
            data:data
        })
        console.log(data)
    }
}


export default GetUserList