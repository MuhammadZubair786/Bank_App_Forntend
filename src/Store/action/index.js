const Inc = (data)=>{
    console.log(data)
    return(dispatch)=>{
        dispatch({
            type:'SETDATA',
            data:data
        })
        console.log(data)
    }
}


export default Inc