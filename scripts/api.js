// import the token
import { store }  from "./store.js"


//User Actions

//Sign Up
export const signUp = (data) => {
    return fetch('http://localhost:3000/sign-up', {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}



export const signIn = (data) => {
    return fetch('http://localhost:3000/sign-in', {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}


//customer actions

//create

// index
export const indexCustomers = () => {
    return fetch('http://localhost:3000/sign-in', {
        headers : {
            Authorization: `Bearer ${store.userToken}`
        },
    })
}
//show


//update 



//delete


//print actions 

//create

//index incomplete

//index index complete

//update

//delete