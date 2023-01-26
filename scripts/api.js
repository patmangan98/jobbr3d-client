// import the token
import { store }  from "./store.js"


//User Actions

//Sign Up
export const signUp = (data) => {
    return fetch('http://localhost:9001/sign-up', {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}


//sign in
// export const signIn = (data) => {
//     return fetch('http://localhost:9001/sign-in', {
//         method: 'POST',
//         headers : {
//             'Accept' : 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     })
// }


//customer actions

//create

//index
// export const indexCustomers = () => {
//     return fetch()
// }
//show


//update 



//delete


//print actions 

//create

//index incomplete

//index index complete

//update

//delete