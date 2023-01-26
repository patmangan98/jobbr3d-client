import {
    signUp,
    // signIn,
} from './api.js'

import {
    onSignUpSuccess,
    onFailure,
} from './ui.js'

const signUpContainer = document.querySelector('#signUp')
// const signInContainer = document.querySelector('#signIn')

signUpContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target['email'].value,
            password: event.target['password'].value,
        },
    }
    signUp(userData)
    .then(onSignUpSuccess)
    .catch(onFailure)
})

// signInContainer.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const userData = {
//         credentials: {
//             email: event.target['email'].value,
//             password: event.target['password'].value, 
//         },
//         sign(userData)
//     }
// })