// import { store } from './store'
import {
    signUp,
    signIn,
    indexCustomers,
    showCustomer,
    updateCustomer,
    createCustomer,
    deleteCustomer,
    createPrint
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
    updateShowElementsAfterChange,
    updateCustomerIndexAfterChange,
    indexAllPrints,
    onCreatePrintSuccess,
    onAddPrintClick,
} from './ui.js'

const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
const showCustomerContainer = document.querySelector('#show-customer-container')
const indexCustomerContainer = document.querySelector('#index-customer-container')
const addCustomerButton = document.querySelector('#add-customer')
const addCustomerform = document.querySelector('#add-customer-form')
const addPrintForm = document.querySelector('#create-print-form')
const addPrintButton = document.querySelector('#addPrint')
// const selectDropdown = document.querySelectorAll('#select-dropdown')

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
        // .then(indexCustomers)
        // .then((res) => res.json())
        // .then(indexAllPrints)
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
    console.log(id)
    const customerData = {
        customer: {
            firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			contact: event.target['contact'].value,
			description: event.target['description'].value,
        },
    }
    updateCustomer(customerData, id)
        .then(onUpdateCustomerSuccess)
        .then(updateShowElementsAfterChange)
        .then(updateCustomerIndexAfterChange)
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexCustomersAfterSignIn)
        .catch(console.error)
})

addCustomerButton.addEventListener('click', (event) => {
    onAddCustomerClick()
})

addCustomerform.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target)
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
        .then(updateCustomerIndexAfterChange)
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexCustomersAfterSignIn)
        .then(updateShowElementsAfterChange) 
        .catch(console.error())
})

showCustomerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if (!id) return

    deleteCustomer(id)
        .then(onDeleteCustomerSuccess)
        .then(updateCustomerIndexAfterChange)
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexCustomersAfterSignIn)
        .then(updateShowElementsAfterChange)
        .catch(console.error)
})

addPrintButton.addEventListener('click', (event) => {
    onAddPrintClick()
})

addPrintForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target)
    const dropOptions = document.querySelector('#select-dropdown')
    const printData = {
        print: {
            weight: event.target['weight'].value,
            hoursToPrint: event.target['hoursToPrint'].value,
            description: event.target['description'].value,
            isDone: event.target['isDone'].value,
            customerId : dropOptions[dropOptions.selectedIndex].value,
        },
    }
    console.log(printData)
    createPrint(printData)
        .then(onCreatePrintSuccess)
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexAllPrints)
        .catch(console.error)
})

