import { store } from './store.js'

const messageContainer = document.querySelector('#message-container')
// const authContainer = document.querySelector('#auth-container')
const indexCustomersContainer = document.querySelector('#index-customer-container')
const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
const showCustomerContainer = document.querySelector('#show-customer-container')
const addCustomerButton = document.querySelector('#add-customer')
const addCustomerform = document.querySelector('#add-customer-form')
//global on failure
export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}
//hide functions


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
    addCustomerButton.classList.add("btn", "btn-primary")
    store.userToken = userToken
}


//customer actions

export const indexCustomersAfterSignIn = (customers) => {
    customers.customers.forEach((customer) => {
        const div = document.createElement('div')
        div.classList.add('container')
        div.innerHTML = `
        <h4>${customer.firstName} ${customer.lastName}</h4>
        <button data-id="${customer._id}">Show Customer</button>
        `
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


export const reloadElementsAfterChange = () => {
    while(showCustomerContainer.firstChild) {
        showCustomerContainer.children[0].remove()
    }
    console.log('done')
}

export const reloadCustomerIndexAfterChange = () => {
    while(indexCustomersContainer.firstChild) {
        indexCustomersContainer.children[0].remove() 
    }
}

//on create customer success
export const onAddCustomerClick = () => {
    addCustomerform.classList.remove('hide')
}

export const onCreateCustomerSuccess = () => {
    addCustomerform.classList.add('hide')
    messageContainer.innerHTML= 'customer Created Successfully'
    while(indexCustomersContainer.firstChild) {
        indexCustomersContainer.children[0].remove() 
    }
}

//on update customer success
export const onUpdateCustomerSuccess = () => {
    messageContainer.innerHTML = `customer updated successfully`
}
//on delete customer success
export const onDeleteCustomerSuccess = (customers) => {
    messageContainer.innerHTML = `customer deleted successfully`
    while(indexCustomersContainer.firstChild) {
        indexCustomersContainer.children[0].remove() 
    }

}
//on index customer success

//on show customer success

//print actions

//on create print success

//on update print success

//on delete print success

//on index finished print success

//on index incomplete print success

