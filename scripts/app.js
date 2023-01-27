// import { store } from './store'

import {
    signUp,
    signIn,
    indexCustomers,
    showCustomer,
    updateCustomer,
    createCustomer,
    deleteCustomer,
} from './api.js'

import {
    onSignUpSuccess,
    onFailure,
    onSignInSuccess,
    indexCustomersAfterSignIn,
    onShowCustomerSuccess,
    onUpdateCustomerSuccess,
    onAddCustomerClick,
    onCreateCustomerSuccess,
    onDeleteCustomerSuccess,
} from './ui.js'

const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
const showCustomerContainer = document.querySelector('#show-customer-container')
const indexCustomerContainer = document.querySelector('#index-customer-container')
const addCustomerButton = document.querySelector('#add-customer')
const addCustomerform = document.querySelector('#add-customer-form')

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

showCustomerContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('data-id')
    const customerData = {
        customer: {
            firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			strength: event.target['contact'].value,
			class: event.target['description'].value,
        },
    }
    updateCustomer(customerData, id)
        .then(onUpdateCustomerSuccess)
        .catch(console.error)
})

addCustomerButton.addEventListener('click', (event) => {
    onAddCustomerClick()
})

addCustomerform.addEventListener('click', (event) => {
    event.preventDefault()
    const customerData = {
        customer: {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            contact: event.target['contact'].value,
            description: event.target['description'].value,
          },
      }
    createCustomer(customerData)
        .then(onCreateCustomerSuccess)
        .catch(onFailure)
})

showCustomerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if (!id) return

    deleteCustomer(id)
        .then(onDeleteCustomerSuccess)
        .catch(console.error)
})