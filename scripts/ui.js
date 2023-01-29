import { store } from './store.js'

const messageContainer = document.querySelector('#message-container')

//auth constants
const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
//customer constants
const showCustomerContainer = document.querySelector('#show-customer-container')
const indexCustomersContainer = document.querySelector('#index-customer-container')
//
const addCustomerButton = document.querySelector('#add-customer')
const addCustomerform = document.querySelector('#add-customer-form')
const unfinishedPrintsCont = document.querySelector('#index-incomplete-prints')
const finishedPrintsCont = document.querySelector('#index-finished-prints')
const selectDropdown = document.querySelector('#select-dropdown')
const createPrintContainer = document.querySelector('#create-print-conatiner')
const addPrintButton = document.querySelector('#addPrint')

//global on failure
export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}
//on signup success
export const onSignUpSuccess = () => {
    messageContainer.innerHTML = '<p>success, now sign in<p>'
    signUpContainer.style.display = 'none'
    console.log('worked')
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = '<p>sign in successful</p>'
    signInContainer.classList.add('hide')
    signUpContainer.classList.add('hide')
    addCustomerButton.classList.remove('hide')
    addCustomerButton.classList.add('btn', 'btn-primary')
    addPrintButton.classList.add('hide')
    unfinishedPrintsCont.classList.add('hide')
    finishedPrintsCont.classList.add('hide')
    store.userToken = userToken
}

//customer actions
export const onAllPrintsNavClick = () => {
   console.log('click')
   indexCustomersContainer.classList.add('hide')
   addCustomerButton.classList.add('hide')
   addPrintButton.classList.remove('hide')
   addPrintButton.classList.add('btn', 'btn-primary')
   unfinishedPrintsCont.classList.remove('hide')
   finishedPrintsCont.classList.remove('hide')
   
}
//on customer click
//on complete print click
//on incomplete print click



export const indexCustomersAfterSignIn = (userCustomers) => {
    userCustomers.customers.forEach((customer) => {
        const div = document.createElement('div')
        div.classList.add('container', `${customer.firstname}`)
        div.innerHTML = `
            <h4>${customer.firstName} ${customer.lastName}</h4>
            <button data-id="${customer._id}">Show Customer</button>
        `
        const option = document.createElement('option')
        option.setAttribute('value', `${customer._id}`)
        option.setAttribute('id', `${customer._id}`)
        option.innerText = `${customer.firstName} ${customer.lastName}`
        selectDropdown.appendChild(option)
        indexCustomersContainer.appendChild(div)
    })
}

export const onShowCustomerSuccess = (customer) => {
    
    const div = document.createElement('div')
    div.classList.add('container')
    div.setAttribute('id', 'updateCustomer')
    div.innerHTML = `
            <p>${customer.firstName} ${customer.lastName}</p>
            <p>${customer.contact}</p>
            <p>${customer.descripton}</p>
            <button data-id="${customer._id}">Delete Customer</button>
            <form data-id="${customer._id}">
                <input type="text" name="firstName" value="${customer.firstName}">
                <input type="text" name="lastName" value="${customer.lastName}">
                <input type="text" name="contact" value="${customer.contact}">
                <input type="text" name="description" value="${customer.description}">
                <input type="submit" value="Update Customer">
            </form>

           
    `
    showCustomerContainer.appendChild(div)
}

export const indexAllPrints = (userCustomers) => {
    userCustomers.customers.forEach((customer) => {
        let printsArr = customer.prints
        printsArr.forEach((print) => {
            const div = document.createElement('div')
            div.classList.add('container')
            div.innerHTML = `
                <h6>${customer.firstName} ${customer.lastName}</h6>
                <p>Estimated Weight: ${print.weight} grams</p>
                <p>Estimated Print Time: ${print.hoursToPrint} hours</p>
                <p>Status: ${print.isDone}</p>
                <button data-id="${print._id}">Delete Print</button>
            `
            if(print.isDone === true){
                finishedPrintsCont.appendChild(div)
            } else {
                console.log('print is not finished')
                unfinishedPrintsCont.appendChild(div)
            }
        })
    })
}

//refresh functions 
export const updateShowElementsAfterChange = () => {
    while(showCustomerContainer.firstChild) {
        showCustomerContainer.children[0].remove()
    }
}

export const updateCustomerIndexAfterChange = () => {
    while(indexCustomersContainer.firstChild) {
        indexCustomersContainer.children[0].remove() 
    }
}

export const updateUnfinishedPrintsCont = () => {
    
}


export const onAddCustomerClick = () => {
    addCustomerform.classList.remove('hide')
}

export const onCreateCustomerSuccess = () => {
    addCustomerform.classList.add('hide')
    messageContainer.innerHTML= 'customer Created Successfully'
}



//on update customer success
export const onUpdateCustomerSuccess = () => {
    messageContainer.innerHTML = `customer updated successfully`
}
//on delete customer success
export const onDeleteCustomerSuccess = () => {
    messageContainer.innerHTML = `customer deleted successfully`
}

export const onAddPrintClick = () => {
    createPrintContainer.classList.remove('hide')
}
//on create print success
export const onCreatePrintSuccess = () => {
    messageContainer.innerHTML = 'print created successfully'
    createPrintContainer.classList.add('hide')
}

export const onDeletePrintSuccess = () => {
    messageContainer.innerHTML = 'print deleted successfully'
}