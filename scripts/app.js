import {
    signUp,
    signIn,
} from './api.js'

import {
    onSignUpSuccess,
    onFailure,
    // onSignInSuccess
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
    .then(onSignUpSuccess)
    .catch(onFailure)
    event.preventDefault()
})

// signInContainer.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const userData = {
//         credentials: {
//             email: event.target['email'].value,
//             password: event.target['password'].value, 
//         },
       
//     }
//     signIn(userData)
//        .then(console.log("it work"))
//        .catch(console.error())
// })