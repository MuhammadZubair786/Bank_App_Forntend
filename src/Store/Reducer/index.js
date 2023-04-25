const mystate = {
    count: 0,
    user: [],
    staff: []
}

export default (state = mystate, action) => {
    // console.log("Action ", action)
    switch (action.type) {
        case "AddUser":
            localStorage.setItem('users', JSON.stringify([...state.user, action.data]));
            return ({
                ...state,
                user: [...state.user, action.data],

            })
        case "AddStaff":
            localStorage.setItem('staff', JSON.stringify([...state.staff, action.data]));
            return ({
                ...state,
                staff: [...state.staff, action.data],

            })

        case "ListUser":
            return ({
                ...state,
                user: action.data,
            })
        case "ListStaff":
            return ({
                ...state,
                staff: action.data,
            })


        case "AddAccount":
            const updatedUsersWithCreateAccount = state.user.map(user => {

                if (user.email === action.data["chk"]["email"]) {


                    return {
                        ...user, accountsCreate: [...user.accountsCreate, {
                            account_type: action.data["account_type"],
                            balance: action.data["balance"],
                            status: action.data["status"],
                            accountNumber: action.data["accountNumber"],
                            Date: action.data["Date"],
                            email: user.email,
                            name: user.name

                        }]
                    };


                }
                return user;
            });
            // console.log(updatedUsersWithCreateAccount)
            updatedUsersWithCreateAccount.map(user => {
                if (user.email == action.data["chk"]["email"]) {
                    localStorage.setItem("Login_User", JSON.stringify(user))

                }
            })
            localStorage.setItem("users", JSON.stringify(updatedUsersWithCreateAccount))
            return ({
                ...state, user: updatedUsersWithCreateAccount
            })

        case "Add_Beneficiary":
            const AddBeneficiaryAccount = state.user.map(user => {

                if (user.email === action.data["chk"]["email"]) {


                    return {
                        ...user, UsersBenficiary: [...user.UsersBenficiary, {
                            accountno: action.data["accountno"],
                            type: action.data["type"],
                            status: action.data["status"],
                            Date: action.data["Date"],
                            email: user.email,
                            name: user.name

                        }]
                    };


                }
                return user;
            });
            // console.log(AddBeneficiaryAccount)
            AddBeneficiaryAccount.map(user => {
                if (user.email == action.data["chk"]["email"]) {
                    localStorage.setItem("Login_User", JSON.stringify(user))

                }
            })
            localStorage.setItem("users", JSON.stringify(AddBeneficiaryAccount))
            return ({
                ...state, user: AddBeneficiaryAccount
            })

        case "AddNewTrasaction":
            let getuser = JSON.parse(localStorage.getItem("Login_User"))
            // // console.log(action.data,getuser["email"])
            const AddTrasncatinData = state.user.map(user => {
                if (user.email == getuser["email"]) {
                    // console.log(user)

                    return {
                        ...user, transactionHistory: [...user.transactionHistory, {
                            Date: action.data["Date"],
                            account_type: action.data["account_type"],
                            sendamount: action.data["sendamount"],
                            reason: action.data["reason"],
                            recieveaccountno: action.data["recieveaccountno"],
                            sendaccountno: action.data["accountno"],
                            transactiontype: action.data["transactiontype"]
                        }]
                    };


                }
                return user;


            })
            // console.log(AddTrasncatinData)

            let BalanceSet = AddTrasncatinData.map(user => {
                // console.log(user)
                if (user.email == getuser["email"]) {
                    const accountsCreate = user.accountsCreate.map(user1 => {
                        if (user1.accountNumber == action.data["accountno"]) {
                            const newBalance = user1.balance - action.data["sendamount"];
                            return { ...user1, balance: newBalance };
                        }
                        else {
                            return user1;
                        }
                    })
                    const updatedUser = { ...user, accountsCreate };
                    return updatedUser;
                } else {
                    return user;
                }
            })



            BalanceSet.map(user => {
                if (user.email == getuser["email"]) {
                    localStorage.setItem("Login_User", JSON.stringify(user))

                }
            })
            localStorage.setItem("users", JSON.stringify(BalanceSet))
            return ({
                ...state, user: BalanceSet
            })


        case "ApproveBeneficiary":
            // console.log(action.data)
            let getuser_det = JSON.parse(localStorage.getItem("Login_User"))
            const ApproveBene = state.user.map(user => {
                if (action.data["email"] == user.email) {
                    const UsersBenficiary = user.UsersBenficiary.map(user1 => {
                        if (user1.accountno == action.data["accountno"]) {
                            console.log(user1)
                            return { ...user1, status: true };

                        }
                        else {
                            return user1;
                        }
                    })
                    const updatedUser = { ...user, UsersBenficiary };
                    return updatedUser;
                }
                else {
                    return user;

                }
            })
            ApproveBene.map(user => {
                if (user.email == action.data["email"]) {
                    localStorage.setItem("Login_User", JSON.stringify(user))

                }
            })
            localStorage.setItem("users", JSON.stringify(ApproveBene))
            return ({
                ...state, user: ApproveBene
            })

        case "AccountApprove":
            console.log(action.data["email"])
            // let getuser_det = JSON.parse(localStorage.getItem("Login_User"))
            const ApproveAccoun = state.user.map(user => {
                if (action.data["email"] == user.email) {
                    console.log(user.accountsCreate)
                    const accountsCreate = user.accountsCreate.map(user1 => {
                        // console.log(action.data["accountno"])
                        if (user1.accountNumber == action.data["accountNumber"]) {
                            console.log(user1)
                            return { ...user1, status: true };

                        }
                        else {
                            return user1;
                        }
                    })
                    const updatedUser = { ...user, accountsCreate };
                    return updatedUser;
                }
                else {
                    return user;

                }
            })
            console.log(ApproveAccoun)
            ApproveAccoun.map(user => {
                if (user.email == action.data["email"]) {
                    localStorage.setItem("Login_User", JSON.stringify(user))

                }
            })
            localStorage.setItem("users", JSON.stringify(ApproveAccoun))
            return ({
                ...state, user: ApproveAccoun
            })

        case "Enabled_Disabled_Customer":

            // console.log(action.data)
            const AccountState = state.user.map(user => {
                if (user.email == action.data["email"]) {
                    console.log(user)

                    let status_chg = user.status == true ? false : true
                    console.log(status_chg)
                    return {
                        ...user, status: status_chg
                    }


                }
                else {
                    return user
                }
            })

            AccountState.map(user => {
                if (user.email == action.data["email"]) {
                    localStorage.setItem("Login_User", JSON.stringify(user))

                }
            })
            localStorage.setItem("users", JSON.stringify(AccountState))
            return ({
                ...state, user: AccountState
            })


        case "Enabled_Disabled_Staff":

            console.log(action.data)
            const StaffState = state.staff.map(user => {
                if (user.email == action.data["email"]) {
                    console.log(user)

                    let status_chg = user.status == true ? false : true
                    console.log(status_chg)
                    return {
                        ...user, status: status_chg
                    }


                }
                else {
                    return user
                }
            })

            // StaffState.map(user => {
            //     if (user.email == action.data["email"]) {
            //         localStorage.setItem("Login_User", JSON.stringify(user))

            //     }
            // })
            localStorage.setItem("staff", JSON.stringify(StaffState))
            return ({
                ...state, staff: StaffState
            })


        // break;



        // case "AccountBalanceSet":
        //     let getuserdetail = JSON.parse(localStorage.getItem("Login_User"))
        //     // console.log(action.data)
        //     const AccountsAmountySets = state.user.map(user => {
        //         if (user.email == getuserdetail["email"]) {
        //             const accountsCreate = user.accountsCreate.map(user1 => {
        //                 if (user1.accountNumber == action.data["accountno"]) {
        //                     const newBalance = user1.balance - action.data["sendamount"];
        //                     return { ...user1, balance: newBalance };
        //                 }
        //                 else {
        //                     return user1;
        //                 }
        //             })
        //             const updatedUser = { ...user, accountsCreate };
        //             return updatedUser;
        //         } else {
        //             return user;
        //         }

        //     }

        //     )

        //     AccountsAmountySets.map(user => {
        //         if (user.email == getuserdetail["email"]) {
        //             localStorage.setItem("Login_User", JSON.stringify(user))

        //         }
        //     })

        //     localStorage.setItem('users', JSON.stringify(AccountsAmountySets));
        //     return { ...state, users: AccountsAmountySets };



        default:
            return state
    }
    return state
}