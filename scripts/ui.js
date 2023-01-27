import { store } from './store.js'

const messageContainer = document.querySelector('#message-container')
// const authContainer = document.querySelector('#auth-container')
const indexCustomers = document.querySelector('#index-customer-container')
const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
const showCustomerContainer = document.querySelector('#show-customer-container')


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
    store.userToken = userToken
}


//customer actions

export const indexCustomersAfterSignIn = (customers, ) => {
    customers.customers.forEach((customer) => {
        const div = document.createElement('div')
        div.classList.add('container')
        div.innerHTML = `
        <h4>${customer.firstName} ${customer.lastName}</h4>
        <button data-id=${customer._id}">Show Customer</button>
        `
        indexCustomers.appendChild(div)
    })
}

export const onShowCustomerSuccess = (customer) => {
    const div = document.createElement('div')
    div.classList.add('containter')
    div.innerHTML = `
    <p>${customer.firstName} ${customer.lastName}</p>
    <p>${customer.contact}</p>
    <p>${customer.descripton}</p>


    `
    showCustomerContainer.appendChild(div)
}


//on create customer success

//on update customer success

//on delete customer success

//on index customer success

//on show customer success

//print actions

//on create print success

//on update print success

//on delete print success

//on index finished print success

//on index incomplete print success

