// import { store } from './store' 
import {
    signUp,
    signIn,
    indexCustomers,
    showCustomer,
    updateCustomer,
    createCustomer,
    deleteCustomer,
    createPrint,
    deletePrint,
    updatePrint,
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
    onAllPrintsNavClick,
    onDeletePrintSuccess,
    updateUnfinishedPrintsCont,
    onUpdatePrintSuccess,
    clickCustomerTab,
    clickIncompleteTab,
    clickCompleteTab,
} from './ui.js'

const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
const showCustomerContainer = document.querySelector('#show-customer-container')
const indexCustomerContainer = document.querySelector('#index-customer-container')
const addCustomerButton = document.querySelector('#add-customer')
const addCustomerform = document.querySelector('#add-customer-form')
const addPrintForm = document.querySelector('#create-print-form')
const addPrintButton = document.querySelector('#addPrint')
const allPrintsNav = document.querySelector('#all-prints')
const unfinishedPrintsCont = document.querySelector('#index-incomplete-prints')
// const finishedPrintsCont = document.querySelector('#index-finished-prints')
// const selectDropdown = document.querySelectorAll('#select-dropdown')
const customerTab = document.querySelector('#customers-tab')
const incompleteTab = document.querySelector('#incomplete-prints-tab')
const completeTab = document.querySelector('#complete-prints-tab')

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
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexAllPrints)
        .catch(console.error)
})

//show more customer information
indexCustomerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if (!id) return
    showCustomer(id)
        .then((res) => res.json())
        .then((res) => onShowCustomerSuccess(res.customer))
        .catch(onFailure)
})

//update customer display
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

allPrintsNav.addEventListener('click', (event) => {
    onAllPrintsNavClick()

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
        .then(updateUnfinishedPrintsCont())
        .then(indexCustomers)
        .then((res) => res.json())
        .then(indexAllPrints)
        .catch(console.error)
})

unfinishedPrintsCont.addEventListener('submit', (event) => {
    event.preventDefault()
    if(event.target.classList.contains("update-print")) {
        const printIds = event.target.getAttribute('id')
        const customerId= event.target.getAttribute('data-id')
        const printData = {
            print : {
                weight: event.target['weight'].value,
                hoursToPrint: event.target['hoursToPrint'].value,
                description: event.target['description'].value,
                isDone: event.target['isDone'].value,
                customerId: customerId
            },
        }
        console.log(printData)
        console.log(printIds)
        console.log(customerId)
        updatePrint(printData, printIds)
            .then(onUpdatePrintSuccess)
            .then(updateUnfinishedPrintsCont)
            .then(indexCustomers)
            .then((res) => res.json())
            .then(indexAllPrints)
            .catch(console.error)
    }
})

unfinishedPrintsCont.addEventListener('click', (event) => {
    if (event.target.classList.contains("removePrint")){
        const printIds = event.target.getAttribute('data-id')
        const customerIds = event.target.getAttribute('id')
        if (!printIds) return
        deletePrint(printIds, customerIds)
            .then((onDeletePrintSuccess()))
            .then((updateUnfinishedPrintsCont()))
            .then(indexCustomers)
            .then((res) => res.json)
            .then(indexAllPrints)
            .catch(console.error)
    }
 
})


customerTab.addEventListener('click', (event) => {
    clickCustomerTab()
})
incompleteTab.addEventListener('click', (event) => {
    clickIncompleteTab()
})
completeTab.addEventListener('click', (event) => {
    clickCompleteTab()
})