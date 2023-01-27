// import { store } from './store'

import {
    signUp,
    signIn,
    indexCustomers,
    showCustomer,
} from './api.js'

import {
    onSignUpSuccess,
    onFailure,
    onSignInSuccess,
    indexCustomersAfterSignIn,
    onShowCustomerSuccess,    
} from './ui.js'

const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
// const showCustomerButton = document.querySelector(`${customer._id}`)
const indexCustomerContainer = document.querySelector('#index-customer-container')


signUpContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target['email'].value,
            password: event.target['password'].value,
        },
    }
    signUp(userData)
    try {
        onSignUpSuccess()
    } catch { onFailure() }
   
})

signInContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target['email'].value,
            password: event.target['password'].value, 
        },
       
    }
    signIn(userData)

        .then((res) => res.json())
        .then((res) => onSignInSuccess(res.token)) 
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexCustomersAfterSignIn)
        
        .catch(console.error)
})

indexCustomerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if (!id) return
    showCustomer(id)
        .then((res) => res.json())
        .then((res) => onShowCustomerSuccess(res.customer))
        .catch(onFailure)
})