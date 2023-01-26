const messageContainer = document.querySelector('#message-container')
const authContainer = document.querySelector('#auth-container')
const indexCustomers = document.querySelector('#index-customer-container')

//global on failure
export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}
//hide functions

//user actions

//on signup success

export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'success, now sign in'
    authContainer.classList.add('hide')
}

//on sign in success

// export const onSignInSuccess = (userToken) => {
//     authContainer.classList.add('hide')
    
// }

//customer actions

//on create customer success

//on update customer success

//on delete customer success

//on index customer success
// export const onIndexCustomerSuccess = (customers) => {
//     customers.forEach((customer) => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <h3>${customer.firstName} ${customer.lastName} </h3>
//         <h2>${customer.contact}</h2> 
//         <button data-id="${customer._id}">Show Customer</button>  
//         `
//         indexCustomerContainer.appendChild(div)
//     })
// }
//on show customer success

//print actions

//on create print success

//on update print success

//on delete print success

//on index finished print success

//on index incomplete print success

