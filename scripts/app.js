// import { store } from './store'

import {
    signUp,
    signIn,
    indexCustomers
} from './api.js'

import {
    onSignUpSuccess,
    onFailure,
    onSignInSuccess,
    indexCustomersAfterSignIn
} from './ui.js'

const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')

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