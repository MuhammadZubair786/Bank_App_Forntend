const mystate = {
    count: 0,
    user : [{
        name : "asad",
        email : "mzh111"
    }]
}

export default (state = mystate, action) => {
    console.log("Action ", action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                count: action.data + 1
            })
       
        default:
            return state
    }
    return state
}